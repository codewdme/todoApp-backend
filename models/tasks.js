const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tasksSchema = new Schema({
  taskName: {
    type: String,
    required: true,
  },
  taskDescription: {
    type: String,
  },
  taskPriority: {
    type: Number,
    required: true,
  },
  taskCompletion: {
    type: Boolean,
    required: true,
    default: false,
  },
  taskDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("task", tasksSchema);
