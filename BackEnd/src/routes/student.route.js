const express = require('express');
const { getStudent, getTopicApprovedForStudent, getTopicApprovedDetailForStudent, updateTopic, upload } = require('../controllers/student.controllers')
const { authenMiddleware } = require('../middlewares/authen.middleware');
const studentRoute = express.Router();

studentRoute
  .route('/TopicApprovedForStudent')
  .get(
    authenMiddleware,
    getTopicApprovedForStudent
  );

studentRoute
  .route('/TopicApprovedDetailForStudent/:id')
  .get(
    authenMiddleware,
    getTopicApprovedDetailForStudent
  );

studentRoute
  .route('/updateTopic/:id')
  .patch(
    authenMiddleware,
    (req,res,next)=>{ req.listFile = [];next();},
    upload.any(),
    updateTopic
  );

studentRoute
  .route('/:id')
  .get(
    authenMiddleware,
    getStudent
  );

module.exports = { studentRoute }