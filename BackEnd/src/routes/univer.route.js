const express = require('express');
const { getAllUniverCode } = require('../controllers/univer.controllers');

const univerRoute = express.Router();


univerRoute
    .route('/')
    .get(
        getAllUniverCode,
    )

module.exports = { univerRoute }
