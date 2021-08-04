// init project
let express = require("express");
let bodyParser = require("body-parser");
const tasksRoute = require('./routes/tasks.routes.js');
let app = express();

// parses the JSON request body string into an object and then assigns it to req.body
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// sending all API requests to routes file
app.use('/tasks', tasksRoute);
app.use('/tasks/*', tasksRoute);

// Listening on port 8080
let listener = app.listen(8080, function () {
    console.log("Listening on port " + listener.address().port);
});