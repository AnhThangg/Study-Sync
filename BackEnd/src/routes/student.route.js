const express = require('express');
const { getStudent, getTopicApprovedForStudent } = require('../controllers/student.controllers')
const { authenMiddleware } = require('../middlewares/authen.middleware');
const studentRoute = express.Router();

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