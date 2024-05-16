const express = require('express');
const { createTopic, getTopics, downloadFile } = require('../controllers/topic.controllers')
const { authenMiddleware } = require('../middlewares/authen.middleware');
const topicRoute = express.Router();
topicRoute
  .route('/')
  .get(
    authenMiddleware,
    getTopics
  )
  .post(
    authenMiddleware,
    createTopic
  );

topicRoute
  .route(`/downloadfile/:fileName`)
  .get(
    //authenMiddleware,
    downloadFile
  )

module.exports = { topicRoute }