const { AccountUser, Univer, Faculty, Mentor, Student, sequelize } = require('../database/database');

const getAllUniverCode = async (req, res) => {
    try {
        const universities = await Univer.findAll({
            attributes: ['univerCode', 'univerName']
        });
        return res.status(200).json(universities);
    } catch (e) {
        return res.status(500).json(e);
    }
}

module.exports = {
    getAllUniverCode
}