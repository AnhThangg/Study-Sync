const express = require("express");
const {
  getAllFacultyCodeForUniver,
  getUnconfirmedTopicsForFaculty,
  approveTopicForFaculty,
  countTopicsUnconfirmForFaculty,
  getUnconfirmedTopicDetailForFaculty,
  getAllMentor,
  getAllStudents,
  getDetailMentor,
  getDetailStudent,
  getAllTopic
} = require("../controllers/faculty.controller");
const { authenMiddleware } = require("../middlewares/authen.middleware");
const { Faculty } = require("../database/database");

const facultyRoute = express.Router();

facultyRoute
  .route("/approveTopicForFaculty/:id")
  .patch(authenMiddleware, approveTopicForFaculty);

facultyRoute
  .route("/UnconfirmedTopicsForFaculty")
  .get(authenMiddleware, getUnconfirmedTopicsForFaculty);

facultyRoute
  .route("/CountTopicsUnconfirmForFaculty")
  .get(authenMiddleware, countTopicsUnconfirmForFaculty);

facultyRoute
  .route("/unconfirmedTopicDetailForFaculty/:id")
  .get(authenMiddleware, getUnconfirmedTopicDetailForFaculty);

facultyRoute.route("/getAllMentor").get(authenMiddleware, getAllMentor);

facultyRoute.route("/getAllStudents").get(authenMiddleware, getAllStudents);

facultyRoute.route("/getAllTopic").get(authenMiddleware, getAllTopic);

facultyRoute.route("/getDetailMentor/:id").get(authenMiddleware, getDetailMentor);

facultyRoute.route("/getDetailStudent/:id").get(authenMiddleware, getDetailStudent);

facultyRoute.route("/:id").get(getAllFacultyCodeForUniver);

module.exports = { facultyRoute };
