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
            return res.status(404).json({
                status: 'Fail',
                message: 'Student Does not Exist!'
            })
        }
        const faculty = await Faculty.findOne({
            where: {
                facultyCode: student.facultyCode
            }
        });
        student.facultyName = faculty.facultyName;
        const { studentEmail,studentBirthday,studentAddress,studentPhone,accountId,facultyCode, ...data } = student;
        return res.status(200).send({
            status: 'success',
            student: data
        });

    } catch (e) {
        return res.status(500).json(e);
    }
}



module.exports = {
    getStudent
}