const express = require("express");
const router = express.Router();
const path = require("path");
const successcontroller = require("../controllers/success.js");

router.get("/sucess",successcontroller.displaysuccesspage);

module.exports = router;