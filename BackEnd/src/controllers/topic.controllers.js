const { Topic, Document, Team, StudentTeam} = require('../database/database');
const { v4: uuid } = require('uuid');

const getTopics = async (req,res) => {
    try {
        const projects = await Topic.findAll({
            where: {
                
            },
            raw: true
        });
        return res.status(200).json(projects);
    } catch (e) {
        return res.status(500).json(e);
    }
}
const createTopic = async (req, res) => {
    try {
        const { body: infoTopic } = req;
        const documentCode = uuid();
        const teamCode = uuid();
        const topicCode = uuid();
        let document;
        let team;
        let student_team;
        try {
            document = await Document.create({
                documentCode,
                documentName: infoTopic.topicName,
                documentNameSourceCode: infoTopic.topicName + documentCode,
            });
            team = await Team.create({
                teamCode,
                teamName: infoTopic.topicName
            });
            infoTopic.listMember.forEach(async (item) => {
                student_team = await StudentTeam.create({
                    studentCode: item,
                    teamCode
                })
            })
            await Topic.create({
                topicCode,
                topicName: infoTopic.topicName,
                topicDescription: null,
                topicGoalSubject: infoTopic.topicGoalSubject,
                topicExpectedResearch: infoTopic.topicExpectedResearch,
                topicTech: null,
                topicStatus: 'Đang Chờ Mentor Xét Duyệt',
                topicDateStart: infoTopic.topicDateStart,
                topicDateEnd: infoTopic.topicDateEnd,
                documentCode,
                facultyCode: infoTopic.facultyCode,
                teamCode,
                mentorCode: infoTopic.mentorCode,
                leader: infoTopic.leader
            });
            return res.status(200).json('Create Project Successfully')
        } catch (e) {
            if(document || team) {
                await document.destroy();
                await team.destroy();
            }
            
            return res.status(500).json(e);
        }

    } catch (e) {
        return res.status(500).json(e);
    }
}

module.exports = {
    getTopics,
    createTopic
}