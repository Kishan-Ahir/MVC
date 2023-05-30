const express = require("express");
const router = express.Router();
const path = require("path");
const bodyparser = require("body-parser");
const contact_us_controller = require("../controllers/contactus.js");


router.use(bodyparser.urlencoded({extended:false}));

router.get("/contact_us", contact_us_controller.showcontactuspage);

router.post("/contact_us", contact_us_controller.redirecttosuccesspage);


module.exports = router;