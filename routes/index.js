const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/result", (req, res) => {
  const { subject, activity, environment, problem } = req.body;

  let careerOptions = [];

  if (subject === "Science" || problem === "Technical Problems") {
    careerOptions.push("Engineering", "Medicine");
  }
  if (subject === "Math" || problem === "Mathematical Problems") {
    careerOptions.push("Engineering", "Commerce");
  }
  if (subject === "Arts" || problem === "Creative Problems") {
    careerOptions.push("Arts", "Media");
  }
  if (subject === "Commerce" || problem === "Business Problems") {
    careerOptions.push("Commerce", "Business");
  }

  res.render("result", { careerOptions });
});

module.exports = router;
