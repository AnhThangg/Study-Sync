const express = require('express');
const { getMentor, getUnconfirmedTopicsForMentor, approveTopicForMentor, getUnconfirmedTopicDetailForMentor } = require('../controllers/mentor.controllers')
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

mentorRoute
.route('/unconfirmedTopicDetailForMentor/:id')
.get(
  authenMiddleware,
  getUnconfirmedTopicDetailForMentor
);

module.exports = { mentorRoute }