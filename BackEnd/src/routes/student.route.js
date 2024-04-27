const express = require('express');
const { getStudent, getTopicApprovedForStudent, acceptMentorIdea } = require('../controllers/student.controllers')
const { authenMiddleware } = require('../middlewares/authen.middleware');
const studentRoute = express.Router();

studentRoute
  .route('/acceptmentoridea/:id')
  .post(
    authenMiddleware,
    acceptMentorIdea
  );

studentRoute
  .route('/TopicApprovedForStudent')
  .get(
    authenMiddleware,
    getTopicApprovedForStudent
  );

studentRoute
  .route('/:id')
  .get(
    authenMiddleware,
    getStudent
  );

module.exports = { studentRoute }