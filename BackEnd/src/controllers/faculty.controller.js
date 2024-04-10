const { AccountUser, Univer, Faculty, Mentor, Student, sequelize } = require('../database/database');

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

module.exports = {
    getAllFacultyCodeForUniver
}