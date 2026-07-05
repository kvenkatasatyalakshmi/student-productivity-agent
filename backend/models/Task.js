const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  subject: String,
  deadline: Date,
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', TaskSchema);
