const express = require("express");
const Job = require("../models/Job");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  await Job.create({ ...req.body, userId: req.userId });
  res.json("Job Added");
});

router.get("/", auth, async (req, res) => {
  const jobs = await Job.find({ userId: req.userId });
  res.json(jobs);
});

router.delete("/:id", auth, async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json("Job Deleted");
});

module.exports = router;
