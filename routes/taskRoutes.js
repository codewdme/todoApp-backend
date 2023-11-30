const express = require("express");
const {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} = require("../controllers/tasksController");

// router
const router = express.Router();

// GET all tasks
router.get("/", getTasks);

// CREATE a new task
router.post("/", createTask);

// DELETE a task
router.delete("/:id", deleteTask);

// UPDATE a task
router.patch("/:id", updateTask);

// exporting the router
module.exports = router;
