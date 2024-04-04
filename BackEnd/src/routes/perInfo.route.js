const express = require('express');
const {getInfoPersonal} = require('../controllers/info.controllers')
const {authenMiddleware} = require('../middlewares/authen.middleware'); 
const perInfoRoute = express.Router();
perInfoRoute
    .route('/')
    .get(
      authenMiddleware ,
      getInfoPersonal
    );
    

    // .post(
    //     login
    // );
module.exports = { perInfoRoute }