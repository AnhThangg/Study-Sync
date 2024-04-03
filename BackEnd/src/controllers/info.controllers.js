const { Univer, Faculty, Mentor, Student, sequelize } = require('../database/database');

const findInfo = async (actor, accountId) => {
    let info = await sequelize.models[actor].findOne({
        where: {
            'accountId': accountId,
        },
    });
    return info;
}

const getInfoPersonal = async (req, res) => {
    try {
        const account =  req.account;
        const info = await findInfo(account.role, account.accountId);
        return res.status(200).json(info)
        
    } catch (e) {
        return res.status(500).json(e);
    }
}

module.exports = {
    getInfoPersonal
}