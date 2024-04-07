const path = require('path');
const { Univer, Faculty, Mentor, Student, sequelize } = require('../database/database');

const findInfo = async (actor, accountId) => {
    let info = await sequelize.models[actor].findOne({
        where: {
            'accountId': accountId,
        },
    });
    return info;
}

const findImage = (info) => {
    return (info.studentAvatar) ? info.studentAvatar : 
    (info.mentorAvatr) ? info.mentorAvatr :
    (info.facultyAvatar) ? info.facultyAvatar : info.univerAvatar;
}

const getInfoPersonal = async (req, res) => {
    try {
        const account = req.account;
        const info = await findInfo(account.role, account.accountId);
        return res.status(200).json(info)
    } catch (e) {
        return res.status(500).json(e);
    }
}

const getRole = async (req, res) => {
    try {
        return res.status(200).json(req.account.role)
    } catch (e) {
        return res.status(500).json(e);
    }
}

const getAvatar = async (req, res) => {
    try {
        const {id} = req.params;
        const arr = id.split('_');
        const info = await findInfo(arr[1], arr[0]);
        return res.status(200).sendFile(path.join(__dirname, `../Images/${findImage(info)}`))
    } catch (e) {
        return res.status(500).json(e);
    }
}

module.exports = {
    getInfoPersonal,
    getRole,
    getAvatar,
}