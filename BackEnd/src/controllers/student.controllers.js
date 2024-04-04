const { Mentor, Student, Faculty} = require('../database/database');

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
            return res.status(404).json('Student does not exist')
        }
        const faculty = await Faculty.findOne({
            where: {
                facultyCode: student.facultyCode
            }
        });
        student.facultyName = faculty.facultyName;
        const { studentEmail,studentBirthday,studentAddress,studentPhone,accountId,facultyCode, ...data } = student;
        return res.status(200).send(data);

    } catch (e) {
        return res.status(500).json(e);
    }
}



module.exports = {
    getStudent
}