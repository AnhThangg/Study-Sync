const express = require('express');
const {getInfoPersonal, getRole} = require('../controllers/info.controllers')
const {authenMiddleware} = require('../middlewares/authen.middleware'); 
const perInfoRoute = express.Router();
perInfoRoute
    .route('/')
    .get(
      authenMiddleware ,
      getInfoPersonal
    );
perInfoRoute
      .route('/role')
      .get(
        authenMiddleware,
        getRole
      );

    // .post(
    //     login
    // );
module.exports = { perInfoRoute }