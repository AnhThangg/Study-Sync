const express = require('express');
const { getMentor, getUnconfirmedTopicsForMentor, approveTopicForMentor } = require('../controllers/mentor.controllers')
const { authenMiddleware } = require('../middlewares/authen.middleware');
const mentorRoute = express.Router();
mentorRoute
  .route('/getmentor/:id')
  .get(
    getMentor
  );

mentorRoute
  .route('/UnconfirmedTopicsForMentor')
  .get(
    authenMiddleware,
    getUnconfirmedTopicsForMentor
  );

mentorRoute
  .route('/approveTopicForMentor/:id')
  .patch(
    authenMiddleware,
    approveTopicForMentor
  );

module.exports = { mentorRoute }