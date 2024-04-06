const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const {accountRoute} = require ('./src/routes/account.route');
const {authRoute} = require('./src/routes/auth.route');
const {perInfoRoute} = require('./src/routes/perInfo.route')
const {studentRoute} = require('./src/routes/student.route');
const { mentorRoute } = require('./src/routes/mentor.route');
const {topicRoute} = require('./src/routes/topic.route');
app.use("/account",accountRoute);

app.use("/auth",authRoute);
app.use("/info",perInfoRoute);
app.use("/student",studentRoute);
app.use("/mentor",mentorRoute);
app.use("/topic", topicRoute);
app.get('/',(req,res)=>{
    res.json('hello')
})

module.exports = app;