const express = require('express');
const {getStudent} = require('../controllers/student.controllers')
const {authenMiddleware} = require('../middlewares/authen.middleware'); 
const studentRoute = express.Router();
studentRoute
    .route('/:id')
    .get(
      authenMiddleware ,
      getStudent
    );
    

    // .post(
    //     login
    // );
module.exports = { studentRoute }