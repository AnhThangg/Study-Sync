const { ProposeIdea, Topic, Document, Team, StudentTeam, Mentor, Student, sequelize, Faculty } = require('../database/database');
const { Sequelize, where } = require('sequelize');
const { v4: uuid } = require('uuid');
const multer = require('multer');
const path = require('path');
const fs = require('fs');


const fortmartDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
    return `${year}-${formattedMonth}-${formattedDay}`;
}

const getStudent = async (req, res) => {
    try {
        const { id: studentCode } = req.params;
        const student = await Student.findOne({
            where: {
                studentCode,
            },
            raw: true
        })
        if (!student) {
            return res.status(404).json({
                status: 'Fail',
                message: 'Student Does not Exist!'
            })
        }
        const faculty = await Faculty.findOne({
            where: {
                facultyCode: student.facultyCode
            }
        });
        student.facultyName = faculty.facultyName;
        const { studentEmail, studentBirthday, studentAddress, studentPhone, accountId, facultyCode, ...data } = student;
        return res.status(200).send({
            status: 'success',
            student: data
        });

    } catch (e) {
        return res.status(500).json(e);
    }



}

const getTopicApprovedForStudent = async (req, res) => {
    try {
        const students = await Student.findOne({
            where: {
                accountId: req.account.accountId
            }
        })
        await sequelize.query(`with result as (
            select topics.topicCode, topics.topicName, topics.leader, mentors.mentorFullname 
            from students 
            inner join student_teams on students.studentCode = student_teams.studentCode
            inner join teams on student_teams.teamCode = teams.teamCode
            inner join topics on teams.teamCode = topics.teamCode 
            inner join mentors on topics.mentorCode = mentors.mentorCode 
            where students.studentCode = '${students?.studentCode}' and topics.topicStatus = 'Approved')
            select result.topicCode, result.topicName, result.mentorFullname, students.studentFullname from result
            inner join students on students.studentCode = result.leader; `, { type: Sequelize.QueryTypes.SELECT })
            .then(result => {
                const simplifiedTopics = result.map((item, index) => ({
                    no: index + 1,
                    ...item
                }));
                return res.status(200).json(simplifiedTopics);
            })
    } catch (e) {
        console.log(e)
        return res.status(500).json(e.error);
    }
}

const getTopicApprovedDetailForStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const topic = await Topic.findOne({
            where: {
                topicCode: id
            },
            raw: true
        })
        if (!topic) {
            return res.status(404).json('Topic Not Found');
        }
        const mentor = await Mentor.findOne({
            where: {
                mentorCode: topic.mentorCode
            },
            attributes: ['mentorScientificName', 'mentorEmail', 'mentorPhone'],
            raw: true
        })
        const leader = await Student.findOne({
            where: {
                studentCode: topic.leader
            },
            attributes: ['studentCode', 'studentFullname', 'studentEmail', 'studentPhone'],
            raw: true
        })
        const listMember = await StudentTeam.findAll({
            where: {
                teamCode: topic.teamCode,
                studentCode: {
                    [Sequelize.Op.ne]: topic.leader
                }
            }
        })
        const studentCodes = listMember.map(member => member.studentCode);
        const members = await Student.findAll({
            where: {
                studentCode: studentCodes
            },
            attributes: ['studentCode', 'studentFullname'],
            raw: true
        });
        const topicDate = '(' + fortmartDate(topic.topicDateStart) + ') - (' + fortmartDate(topic.topicDateEnd) + ')';

        const faculty = await Faculty.findOne({
            where: {
                facultyCode: topic.facultyCode
            },
            attributes: ['facultyName']
        })
        facultyName = faculty.facultyName;
        const listDocument = await Document.findAll({
            where: {
                topicCode: id
            }
        })

        const formattedData = {};
        
        listDocument.forEach(document => {
            // Tách documentNameSourceCode thành folderName và filename bằng cách sử dụng hàm split()
            const parts = document.documentNameSourceCode.split('*');
            const filename = parts.pop(); // Lấy phần tử cuối cùng là filename
            const folderName = parts.join('/'); // Gộp các phần tử còn lại là folderName
            // Kiểm tra xem folderName đã tồn tại trong formattedData chưa
            if (!formattedData[folderName]) {
                // Nếu chưa tồn tại, thêm mới một mục vào formattedData với key là folderName và một mảng files rỗng
                formattedData[folderName] = {
                    id: uuid(),
                    name: folderName,
                    files: []
                };
            }

            // Thêm tên tệp vào mảng files của folder tương ứng
            formattedData[folderName].files.push({
                id: document.documentCode,
                name: document.documentName,
                source: document.documentNameSourceCode
            });
        });

        // Chuyển đổi object thành mảng để trả về
        const formattedDocuments = Object.values(formattedData);


        const result = {
            mentor: {
                ...mentor
            },
            leader,
            groupMembers: [
                ...members
            ],
            topicDate,
            facultyName,
            topic: {
                ...topic
            },
            listDocument: [
                ...formattedDocuments
            ]
        }

        return res.status(200).json(result);
    } catch (e) {
        console.log(e)
        return res.status(500).json(e.error);
    }
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const folderPath = `./src/Documents/${file.fieldname}`;
        // Kiểm tra xem thư mục đã tồn tại hay không
        fs.access(folderPath, fs.constants.F_OK, (err) => {
            if (err) {
                // Nếu thư mục chưa tồn tại, tạo mới
                fs.mkdir(folderPath, { recursive: true }, (err) => {
                    if (err) {
                        console.error('Error creating directory:', err);
                    } else {
                        console.log('Directory created successfully');
                        cb(null, folderPath);
                    }
                });
            } else {
                console.log('Directory already exists');
                cb(null, folderPath);
            }
        });
    },
    filename: function (req, file, cb) {
        // Tạo tên file mới
        const fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        req.listFile.push({
            ...file,
            fileName
        });
        cb(null, fileName)
    }
});

// Khai báo middleware multer
const upload = multer({ storage: storage });

const updateTopic = async (req, res) => {
    try {
        const id = req.params.id;
        const {
            topicDescription,
            topicGoalSubject,
            topicExpectedResearch,
            topicTech
        } = req.body;

        const topic = await Topic.findOne({
            where: {
                topicCode: id,
            }
        })

        await topic.update({
            topicDescription,
            topicGoalSubject,
            topicExpectedResearch,
            topicTech
        })

        req.listFile.forEach(async (item) => {
            await Document.create({
                documentCode: uuid(),
                documentName: item.originalname,
                topicCode: id,
                documentNameSourceCode: item.fieldname + '*' + item.fileName,
            })
        });
        return res.status(200).json(id);
    } catch (e) {
        console.log(e)
        return res.status(500).json(e.error);
    }
}

module.exports = {
    getStudent,
    getTopicApprovedForStudent,
    getTopicApprovedDetailForStudent,
    updateTopic,
    upload
}