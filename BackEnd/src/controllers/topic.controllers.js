const { Topic, Document, Team, StudentTeam, Mentor, Student, sequelize } = require('../database/database');
const { Sequelize } = require('sequelize');
const { v4: uuid } = require('uuid');


const getTopics = async (req, res) => {
    try {
        console.log(req.account);
        const studentsdf = await Student.findOne({
            where: {
                accountId: req.account.accountId
            }
        })
        //console.log(studentsdf)
        sequelize.query(`select topics.topicCode, topics.topicName, students.studentFullname, mentors.mentorFullname 
        from students 
        inner join student_teams on students.studentCode = student_teams.studentCode
        inner join teams on student_teams.teamCode = teams.teamCode
        inner join topics on teams.teamCode = topics.teamCode 
        inner join mentors on topics.mentorCode = mentors.mentorCode 
        where Students.studentCode = '${studentsdf.studentCode}' `,{type: Sequelize.QueryTypes.SELECT})
        .then(result => {
            // console.log(result)
            return res.status(200).json(result);
        })
    } catch (e) {
        console.log(e)
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
            if (document || team) {
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