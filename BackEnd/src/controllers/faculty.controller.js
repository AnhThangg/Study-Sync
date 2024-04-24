const { AccountUser, Univer, Faculty, Mentor, Student, Topic, sequelize } = require('../database/database');

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
                }
            ],
            attributes: ['topicCode', 'topicName'] // Chọn chỉ trường topicCode và topicName
        });
        const simplifiedTopics = topics.map((topic, index) => ({
            no: index + 1,
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
        await Topic.update(
            { topicStatus: 'Approved' },
            { where: { topicCode: id } }
        );
        return res.status(200).json('Topic approval was successful')
    } catch (e) {
        console.log(e);
        return res.status(500).json(e);
    }
}

module.exports = {
    getAllFacultyCodeForUniver,
    getUnconfirmedTopicsForFaculty,
    approveTopicForFaculty
}