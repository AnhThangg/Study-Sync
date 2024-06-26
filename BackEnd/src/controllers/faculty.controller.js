const { AccountUser, Univer, Faculty, Mentor, Student, Topic, sequelize, StudentTeam } = require('../database/database');
const nodemailer = require('nodemailer');
const fs = require('fs');
const { promisify } = require('util');
const { where } = require('sequelize');
const readFileAsync = promisify(fs.readFile);

const fortmartDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
    return `${year}-${formattedMonth}-${formattedDay}`;
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'studysyncwithdtu@gmail.com',
        pass: 'vmnw mtil uvoh wtin'
    }
});

const getAllFacultyCodeForUniver = async (req, res) => {
    try {
        const { id } = req.params;
        const faculties = await Faculty.findAll({
            where: {
                univerCode: id
            },
            attributes: ['facultyCode', 'facultyName']
        });
        return res.status(200).json(faculties);
    } catch (e) {
        return res.status(500).json(e);
    }
}

const getUnconfirmedTopicsForFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.findOne({
            where: {
                accountId: req.account.accountId
            }
        })
        const topics = await Topic.findAll({
            where: {
                facultyCode: faculty.facultyCode,
                topicStatus: 'Waiting for Faculty Approval'
            },
            include: [
                {
                    model: Student,
                    as: 'student',
                    attributes: ['studentFullname'] // Chọn chỉ trường studentFullname
                },
                {
                    model: Mentor,
                    as: 'mentor',
                    attributes: ['mentorFullname'] // Chọn chỉ trường mentorFullname
                }
            ],
            attributes: ['topicCode', 'topicName'] // Chọn chỉ trường topicCode và topicName
        });
        const simplifiedTopics = topics.map((topic, index) => ({
            no: index + 1,
            topicCode: topic.topicCode,
            topicName: topic.topicName,
            leader: topic.student.studentFullname,
            mentor: topic.mentor.mentorFullname
        }));

        return res.status(200).json(simplifiedTopics);
    } catch (e) {
        console.log(e)
        return res.status(500).json(e);
    }
}

const getUnconfirmedTopicDetailForFaculty = async (req, res) => {
    try {
        const { id: topicId } = req.params;
        const faculty = await Faculty.findOne({
            where: {
                accountId: req.account.accountId
            }
        })
        const topic = await Topic.findOne({
            where: {
                facultyCode: faculty.facultyCode,
                topicStatus: 'Waiting for Faculty Approval',
                topicCode: topicId
            },
            include: [
                {
                    model: Student,
                    as: 'student',
                },
            ],
        });

        const studentCodes = await StudentTeam.findAll({
            where: {
                teamCode: topic.teamCode // Sử dụng teamCode của mentor
            },
            attributes: ['studentCode'] // Chỉ lấy trường studentCode
        });
        const studentCodeList = studentCodes.map(student => student.studentCode);
        const members = await Student.findAll({
            where: {
                studentCode: studentCodeList
            },
            attributes: ['studentCode', 'studentFullname', 'studentPhone', 'studentEmail']
        });
        const filteredMembers = members.filter(member => member.studentCode !== topic.leader);
        const filteredMembersArray = filteredMembers.map(member => ({
            studentCode: member.studentCode,
            studentFullname: member.studentFullname,
            studentPhone: member.studentPhone,
            studentEmail: member.studentEmail
        }));
        const facultyName = await Faculty.findOne({
            where: {
                facultyCode: topic.facultyCode
            },
            attributes: ['facultyName']
        });

        const mentor = await Mentor.findOne({
            where: {
                mentorCode: topic.mentorCode
            }
        })

        const result = {
            facultyName: facultyName.facultyName,
            topicCode: topic.topicCode,
            topicName: topic.topicName,
            topicDescription: topic.topicDescription,
            topicGoalSubject: topic.topicGoalSubject,
            topicExpectedResearch: topic.topicExpectedResearch,
            topicDateStart: fortmartDate(topic.topicDateStart),
            topicDateEnd: fortmartDate(topic.topicDateEnd),
            mentorScientificName: mentor.mentorScientificName,
            mentorEmail: mentor.mentorEmail,
            mentorPhone: mentor.mentorPhone,
            leaderID: topic.leader,
            leaderName: topic.student.studentFullname,
            leaderEmail: topic.student.studentEmail,
            leaderPhone: topic.student.studentPhone,
            members: filteredMembersArray
        };
        return res.status(200).json(result);
    } catch (e) {
        console.log(e)
        return res.status(500).json(e);
    }
}

const approveTopicForFaculty = async (req, res) => {
    try {
        const { id } = req.params;
        const topic = await Topic.findOne({
            where: {
                topicCode: id,
                topicStatus: 'Waiting for Faculty Approval'
            }
        });
        if (!topic) {
            return res.status(404).json('Topic not Found');
        }
        const leader = await Student.findOne({
            where: {
                studentCode: topic.leader,
            }
        });
        const emailLeader = leader.studentEmail;

        await Topic.update(
            { topicStatus: 'Approved' },
            { where: { topicCode: id } }
        );

        const dateObject = new Date(topic.topicDateStart);
        const day = dateObject.getDate(); // Lấy ngày trong tháng (từ 1 đến 31)
        const month = dateObject.getMonth() + 1; // Lấy tháng (từ 0 đến 11, cần cộng thêm 1)
        const year = dateObject.getFullYear(); // Lấy năm
        const mailOptions = {
            from: 'studysyncwithdtu@gmail.com',
            to: emailLeader,
            subject: 'The topic has been approved',
            html: `<table style="width: 100%; text-align: center;">
                        <tr>
                            <td>
                                <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/1/12/Logo_dtu_footer.png/800px-Logo_dtu_footer.png?20240228113812" alt="Logo Dtu" width="500px">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p style="
                                    font-family: 'Sacramento', cursive;
                                    font-weight: 800;
                                    font-style: normal;
                                    font-size: 70px;
                                    color: #D82C2C;
                                    margin: 0; /* Xóa margin mặc định */
                                ">
                                    Study-Sync
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <!-- Các phần còn lại của văn bản -->
                                <p style="
                                    font-size: 30px;
                                    font-weight: 400;
                                    line-height: 29px;
                                    text-align: center; /* Căn giữa ngang cho các dòng text */
                                    color: #1d1d1f;
                                    margin: 0; /* Xóa margin mặc định */
                                    margin-bottom: 10px;
                                ">
                                    Hello <span style=" color: #1e385d; font-weight: bold ">${leader.studentFullname}</span>,
                                </p>
                                <p style="
                                    font-size: 30px;
                                    font-weight: 400;
                                    line-height: 29px;
                                    text-align: center; /* Căn giữa ngang cho các dòng text */
                                    color: #1d1d1f;
                                    margin: 0; /* Xóa margin mặc định */
                                    margin-bottom: 10px;
                                ">
                                    Your topic
                                </p>
                                <p style="
                                    font-size: 40px;
                                    line-height: 29px;
                                    font-family: 'Eczar', serif;
                                    font-optical-sizing: auto;
                                    font-weight: bold;
                                    font-style: normal;
                                    color: #D82C2C;
                                    margin: 5px 0; /* Điều chỉnh margin */
                                    margin-top: 20px;
                                    margin-bottom: 20px;
                                ">
                                    ${topic.topicName}
                                </p>
                                <p style="
                                    font-size: 30px;
                                    font-weight: 400;
                                    line-height: 29px;
                                    text-align: center; /* Căn giữa ngang cho các dòng text */
                                    color: #1d1d1f;
                                    margin: 0; /* Xóa margin mặc định */
                                    margin-bottom: 10px;
                                ">
                                    has been approved,
                                </p>
                                <p style="
                                    font-size: 30px;
                                    font-weight: 400;
                                    line-height: 29px;
                                    text-align: center; /* Căn giữa ngang cho các dòng text */
                                    color: #1d1d1f;
                                    margin: 0; /* Xóa margin mặc định */
                                    margin-bottom: 10px;
                                ">
                                    it starts on the <span style="font-weight: bold; color: #1e385d">${day + '/' + month + '/' + year}</span> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <a style="
                                border: 1px solid #1d1d1f;
                                color: #1d1d1f;
                                border-radius: 999px;
                                transition: background-color 0.5s ease;
                                text-decoration: none;
                                padding: 10px 20px; /* Điều chỉnh padding */
                                font-size: 30px;
                                color: #1d1d1f;
                                border-radius: 980px;
                                display: inline-block; /* Đảm bảo khối inline */
                            " href="http://localhost:5173/" class="goTo"
                                onmouseover="this.style.backgroundColor='#1d1d1f'; this.style.color='#ffffff';"
                                onmouseout="this.style.backgroundColor='transparent'; this.style.color='#1d1d1f';">
                                <span>Go to Study-Sync</span>
                            </a>
                        </td>
                        </tr>
                    </table>
                `
        };
        transporter.sendMail(mailOptions, function (e, info) {
            if (e) {
                console.log(e);
                return res.status(500).json(e);
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).json('Email sent successfully');
            }
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
};


const refuseTopicForFaculty = async (req, res) => {
    try {
        const { id } = req.params;
        const topic = await Topic.findOne({
            where: {
                topicCode: id,
                topicStatus: 'Waiting for Faculty Approval'
            }
        });
        if (!topic) {
            return res.status(404).json('Topic not Found');
        }
        const leader = await Student.findOne({
            where: {
                studentCode: topic.leader,
            }
        });
        const emailLeader = leader.studentEmail;

        await Topic.update(
            { topicStatus: 'Approved' },
            { where: { topicCode: id } }
        );

        const dateObject = new Date(topic.topicDateStart);
        const day = dateObject.getDate(); // Lấy ngày trong tháng (từ 1 đến 31)
        const month = dateObject.getMonth() + 1; // Lấy tháng (từ 0 đến 11, cần cộng thêm 1)
        const year = dateObject.getFullYear(); // Lấy năm
        const mailOptions = {
            from: 'studysyncwithdtu@gmail.com',
            to: emailLeader,
            subject: `The topic ${topic.topicName} was rejected by the Faculty`,
            html: `<table style="width: 100%; text-align: center;">
                        <tr>
                            <td>
                                <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/1/12/Logo_dtu_footer.png/800px-Logo_dtu_footer.png?20240228113812" alt="Logo Dtu" width="500px">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p style="
                                    font-family: 'Sacramento', cursive;
                                    font-weight: 800;
                                    font-style: normal;
                                    font-size: 70px;
                                    color: #D82C2C;
                                    margin: 0; /* Xóa margin mặc định */
                                ">
                                    Study-Sync
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <!-- Các phần còn lại của văn bản -->
                                <p style="
                                    font-size: 30px;
                                    font-weight: 400;
                                    line-height: 29px;
                                    text-align: center; /* Căn giữa ngang cho các dòng text */
                                    color: #1d1d1f;
                                    margin: 0; /* Xóa margin mặc định */
                                    margin-bottom: 10px;
                                ">
                                    Hello <span style=" color: #1e385d; font-weight: bold ">${leader.studentFullname}</span>,
                                </p>
                                <p style="
                                    font-size: 30px;
                                    font-weight: 400;
                                    line-height: 29px;
                                    text-align: center; /* Căn giữa ngang cho các dòng text */
                                    color: #1d1d1f;
                                    margin: 0; /* Xóa margin mặc định */
                                    margin-bottom: 10px;
                                ">
                                    Your topic
                                </p>
                                <p style="
                                    font-size: 40px;
                                    line-height: 29px;
                                    font-family: 'Eczar', serif;
                                    font-optical-sizing: auto;
                                    font-weight: bold;
                                    font-style: normal;
                                    color: #D82C2C;
                                    margin: 5px 0; /* Điều chỉnh margin */
                                    margin-top: 20px;
                                    margin-bottom: 20px;
                                ">
                                    ${topic.topicName}
                                </p>
                                <p style="
                                    font-size: 30px;
                                    font-weight: 400;
                                    line-height: 29px;
                                    text-align: center; /* Căn giữa ngang cho các dòng text */
                                    color: #1d1d1f;
                                    margin: 0; /* Xóa margin mặc định */
                                    margin-bottom: 10px;
                                ">
                                    has been approved,
                                </p>
                                <p style="
                                    font-size: 30px;
                                    font-weight: 400;
                                    line-height: 29px;
                                    text-align: center; /* Căn giữa ngang cho các dòng text */
                                    color: #1d1d1f;
                                    margin: 0; /* Xóa margin mặc định */
                                    margin-bottom: 10px;
                                ">
                                    it starts on the <span style="font-weight: bold; color: #1e385d">${day + '/' + month + '/' + year}</span> 
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <a style="
                                border: 1px solid #1d1d1f;
                                color: #1d1d1f;
                                border-radius: 999px;
                                transition: background-color 0.5s ease;
                                text-decoration: none;
                                padding: 10px 20px; /* Điều chỉnh padding */
                                font-size: 30px;
                                color: #1d1d1f;
                                border-radius: 980px;
                                display: inline-block; /* Đảm bảo khối inline */
                            " href="http://localhost:5173/" class="goTo"
                                onmouseover="this.style.backgroundColor='#1d1d1f'; this.style.color='#ffffff';"
                                onmouseout="this.style.backgroundColor='transparent'; this.style.color='#1d1d1f';">
                                <span>Go to Study-Sync</span>
                            </a>
                        </td>
                        </tr>
                    </table>
                `
        };
        transporter.sendMail(mailOptions, function (e, info) {
            if (e) {
                console.log(e);
                return res.status(500).json(e);
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).json('Email sent successfully');
            }
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

const countTopicsUnconfirmForFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.findOne({
            where: {
                accountId: req.account.accountId
            }
        })
        const topicCount = await Topic.count({
            where: {
                facultyCode: faculty.facultyCode,
                topicStatus: 'Waiting for Faculty Approval'
            }
        });
        return res.status(200).json(topicCount);
    } catch (e) {
        console.log(e)
        return res.status(500).json(e);
    }
}



module.exports = {
    getAllFacultyCodeForUniver,
    getUnconfirmedTopicsForFaculty,
    getUnconfirmedTopicDetailForFaculty,
    approveTopicForFaculty,
    refuseTopicForFaculty,
    countTopicsUnconfirmForFaculty,
}