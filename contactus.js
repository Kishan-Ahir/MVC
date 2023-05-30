const path = require("path");

exports.showcontactuspage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "contact_us.html"));
};


exports.redirecttosuccesspage = (req, res, next) => {
  console.log(req.body.name);
  console.log(req.body.email);
  res.redirect("/sucess");
};