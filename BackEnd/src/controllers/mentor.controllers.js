const { Model } = require('sequelize');
const { Mentor, Student, Faculty } = require('../database/database');

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



module.exports = {
    getMentor
}