const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  //hardcoded logics
  if (req.body.email == "abc@abc.com" && req.body.password === "pass") {
    res.status(200).json({
      email: req.body.email,
    });
  } else {
    res.status(401).json({
      message: "unauthorized",
    });
  }
});

app.post("/register", (req, res) => {
  //hardcoded logics
  if (req.body.email && req.body.password && req.body.confirmPassword) {
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(req.body.email);
    if (!result) {
      res.status(400).json({ message: "Must email's validation" });
    } else {
      if (req.body.password === req.body.confirmPassword) {
        res.status(200).json({
          email: req.body.email,
        });
      } else {
        res.status(400).json({
          message: "Password and confirm password must be same",
        });
      }
    }
  } else {
    res.status(400).json({
      message: "All fields required",
    });
  }
});

app.post("/run", (req, res) => {
  console.log(req.body);
});

app.listen(8080, (err) => {
  if (!err) {
    console.log("Server Started successfully at 8080");
  } else {
    console.log("There is an error in starting the server");
  }
});
