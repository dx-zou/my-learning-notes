const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});
router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/about.html"));
});
router.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/user.html"));
});

module.exports = router;