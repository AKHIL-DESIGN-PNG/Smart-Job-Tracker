const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  company: String,
  role: String,
  status: String,
  appliedDate: Date
});

module.exports = mongoose.model("Job", jobSchema);
