const mongoose = require("mongoose");
const Task = require("../models/tasks");

//GET ALL TASKS
const getTasks = async (req, res) => {
  const tasks = await Task.find({}).sort({ taskDate: -1 });

  res.status(200).json(tasks);
};

// CREATE new Task
const createTask = async (req, res) => {
  const { taskName, taskDescription, taskCompletion, taskPriority } = req.body;
  try {
    const task = await Task.create({
      taskName,
      taskDescription,
      taskCompletion,
      taskPriority,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task exists" });
  }
  try {
    const task = await Task.findOneAndDelete({
      _id: id,
    });
    if (!task) {
      res.status(400).json({ error: "No such Task" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE task

const updateTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Task exists" });
  }

  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: id,
      },
      { ...req.body }
    );

    if (!task) {
      res.status(400).json({ error: "No such Task" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
