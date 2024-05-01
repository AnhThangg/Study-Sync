const express = require('express');
const { getAllFacultyCodeForUniver } = require('../controllers/faculty.controller');

const facultyRoute = express.Router();


facultyRoute
    .route('/:id')
    .get(
        getAllFacultyCodeForUniver,
    )

module.exports = { facultyRoute }
