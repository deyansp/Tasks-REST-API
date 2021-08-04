const express = require("express");
const router = express.Router();
const controller = require("../c/tasks.controller.js");

router.get("/tasks", controller.getAll);
router.get("/tasks/:id", controller.getById);
router.get("/tasks/search/:query", controller.getByQuery);

module.exports = { router };