const { Model } = require('sequelize');
const { Mentor, Student, Faculty, Topic } = require('../database/database');
const { Sequelize, where } = require('sequelize');


const getMentor = async (req, res) => {
    try {
        const { id: idMentor } = req.params;
        const mentor = await Mentor.findOne({
            where: {
                mentorCode: idMentor,
            },
            raw: true
        })
        if (!mentor) {
            return res.status(404).json('Mentor does not exist')
        }
        const faculty = await Faculty.findOne({
            where: {
                facultyCode: mentor.facultyCode
            }
        });
        mentor.facultyName = faculty.facultyName;
        const { mentorCode, mentorBirthday, mentorScientificName, mentorAvatar, accountId, facultyCode, ...data } = mentor;
        return res.status(200).send(data);

    } catch (e) {
        return res.status(500).json(e);
    }
}

const getUnconfirmedTopicsForMentor = async (req, res) => {
    try {
        const mentor = await Mentor.findOne({
            where: {
                accountId: req.account.accountId
            }
        })
        const topics = await Topic.findAll({
            where: {
                mentorCode: mentor.mentorCode,
                topicStatus: 'Waiting for Mentor Approval'
            },
            include: [
                {
                    model: Student,
                    as: 'student',
                    attributes: ['studentFullname'] // Chọn chỉ trường studentFullname
                }
            ],
            attributes: ['topicCode', 'topicName'] // Chọn chỉ trường topicCode và topicName
        });

        // Tạo một mảng mới chỉ chứa các trường cần thiết
        const simplifiedTopics = topics.map((topic,index) => ({
            no: index+1,
            topicCode: topic.topicCode,
            topicName: topic.topicName,
            leader: topic.student.studentFullname
        }));

        return res.status(200).json(simplifiedTopics);
    } catch (e) {
        console.log(e)
        return res.status(500).json(e);
    }
}

module.exports = {
    getMentor,
    getUnconfirmedTopicsForMentor
}