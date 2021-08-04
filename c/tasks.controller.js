// importing the hardcoded list of tasks
const tasks = require("../m/tasks.model.js").tasks;

function getAll(req, res) {
  return res.json(tasks);
}

// returning a specific task by ID
function getById(req, res) {
  let result = tasks.filter((task) => task.id === Number(req.params.id));

  return result.length > 0
    ? res.json(result)
    : res.status(404).json({ error: "Task not found" });
}

// returning all tasks that match a search term
function getByQuery(req, res) {
  let query = req.params.query.toLowerCase();

  // creating a new array with any search matches
  let result = tasks.filter(
    (task) =>
      task.name.toLowerCase().indexOf(query) !== Number(-1) ||
      task.description.toLowerCase().indexOf(query) !== Number(-1)
  );

  return result.length > 0
    ? res.json(result)
    : res.status(404).json({ error: "No search results" });
}
module.exports = { getAll, getById, getByQuery };
