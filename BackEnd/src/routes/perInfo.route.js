const express = require('express');
const { getInfoPersonal, getRole, getAvatar } = require('../controllers/info.controllers')
const { authenMiddleware } = require('../middlewares/authen.middleware');
const perInfoRoute = express.Router();
perInfoRoute
  .route('/')
  .get(
    authenMiddleware,
    getInfoPersonal
  );
perInfoRoute
  .route('/role')
  .get(
    authenMiddleware,
    getRole
  );
perInfoRoute
  .route('/avatar/:id')
  .get(
    getAvatar
  );



// .post(
//     login
// );
module.exports = { perInfoRoute }