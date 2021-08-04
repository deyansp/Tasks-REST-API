// init project
const express = require("express");
const bodyParser = require("body-parser");
const tasksRoute = require("./routes/tasks.routes.js").router;
const path = require("path");
const app = express();

// parses the JSON request body string into an object and then assigns it to req.body
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/v/index.html"));
});

// sending all API requests to routes file
app.use(tasksRoute);

// Listening on port 8080
const listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});