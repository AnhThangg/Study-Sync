const express = require('express');
const {getAccount, createAccount, editAccount, deleteAccount} = require('../controllers/account.controllers')
const {authorMiddleware} = require('../middlewares/author.middleware');
const {authenMiddleware} = require('../middlewares/authen.middleware');
const accountRoute = express.Router();
accountRoute
    .route('/:id')
    .get(
        authenMiddleware,
        authorMiddleware('admin'),
        getAccount
    )
    .post(
        createAccount
    )
    .patch(
        editAccount
    )
    .delete(
        deleteAccount
    )
module.exports = { accountRoute }