const { AccountUser, Univer, Faculty, Mentor, Student, Topic, sequelize, StudentTeam } = require('../database/database');
const { spawn } = require("child_process");
const { channel } = require('diagnostics_channel');
const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage();

// Khai báo middleware multer
const checkUpload = multer({ storage: storage });

const checkDocument = async (req, res, next) => {
    try {
        // Chuyển đổi danh sách tệp thành chuỗi JSON
        const listFile = JSON.stringify(req.files);
        
        // Gọi script Python với chuỗi JSON làm tham số
        const pythonProcess = spawn("python3", [path.join(__dirname, '../python/checkContent.py'), listFile]);

        let pythonOutput = '';

        // Xử lý đầu ra của script Python
        pythonProcess.stdout.on('data', (data) => {
            pythonOutput += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`Error: ${data}`);
        });

        pythonProcess.on('close', (code) => {
            console.log(`Child process exited with code ${code}`);
            if (code === 0) {
                try {
                    const result = JSON.parse(pythonOutput);
                    return res.json(result);
                } catch (error) {
                    return res.status(500).json({ error: 'Error parsing Python output' });
                }
            } else {
                return res.status(500).json({ error: 'Python script exited with error' });
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {
    checkUpload,
    checkDocument,
}