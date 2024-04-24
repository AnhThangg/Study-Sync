const { Topic, Document, Team, StudentTeam, Mentor, Student, sequelize, Faculty } = require('../database/database');
const { Sequelize, where } = require('sequelize');

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
        sequelize.query(`select topics.topicCode, topics.topicName, students.studentFullname, mentors.mentorFullname 
        from students 
        inner join student_teams on students.studentCode = student_teams.studentCode
        inner join teams on student_teams.teamCode = teams.teamCode
        inner join topics on teams.teamCode = topics.teamCode 
        inner join mentors on topics.mentorCode = mentors.mentorCode 
        where Students.studentCode = '${students?.studentCode}' 
        and topics.topicStatus = 'Approved' `, { type: Sequelize.QueryTypes.SELECT })
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

module.exports = {
    getStudent,
    getTopicApprovedForStudent
}