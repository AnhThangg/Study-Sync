const express = require('express');
const {getMentor} = require('../controllers/mentor.controllers')
const {authenMiddleware} = require('../middlewares/authen.middleware'); 
const mentorRoute = express.Router();
mentorRoute
    .route('/:id')
    .get(
      authenMiddleware ,
      getMentor
    );
    

    // .post(
    //     login
    // );
module.exports = { mentorRoute }