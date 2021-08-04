const express = require('express');
const router = express.Router();
const controller = require('./c/tasks.controller.js');

router.get("/", function (req, res) {
    res.send("<h1>Tasks REST API</h1> <p>The following paths are supported</p>");
});

router.get("/tasks", controller.getAll);
router.get("/tasks/:id", controller.getById);
router.get("/tasks/search/:query", controller.getByQuery);

module.exports = { router };