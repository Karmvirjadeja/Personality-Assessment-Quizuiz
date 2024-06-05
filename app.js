const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", (req, res) => {
  const { subject, activity, environment, problem, ...otherAnswers } = req.body;

  let careerOptions = [];

  // Basic logic to determine career options based on user answers
  if (subject === "Science") {
    if (activity === "Researching") {
      careerOptions.push("Scientist", "Research Analyst");
    } else if (activity === "Building Things") {
      careerOptions.push("Engineer", "Architect");
    }
  } else if (subject === "Arts") {
    if (activity === "Creating Art") {
      careerOptions.push("Artist", "Graphic Designer");
    } else if (activity === "Researching") {
      careerOptions.push("Historian", "Anthropologist");
    }
  }

  if (environment === "Laboratory") {
    careerOptions.push("Lab Technician", "Chemist");
  } else if (environment === "Office") {
    careerOptions.push("Accountant", "HR Specialist");
  }

  if (problem === "Technical Problems") {
    careerOptions.push("Software Developer", "IT Specialist");
  } else if (problem === "Business Problems") {
    careerOptions.push("Business Analyst", "Consultant");
  }

  // Ensure unique career options
  careerOptions = [...new Set(careerOptions)];

  res.render("result", { careerOptions });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
