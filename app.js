const http =require("http");
const path = require("path");
const express = require("express"); 
const app = express();
const adminroute = require("./routes/admin.js");
const shoproute = require("./routes/shop.js");
const contactroute = require("./routes/contact.js");
const successroute = require("./routes/success.js");
const errorcontoller = require("./controllers/error");

app.use(express.static(path.join(__dirname,"public"))); //giving access to public folder through fs
/* __durname will take path upto the folder of main file(app.js) which is in this case shopping app */
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "Welcome.html"));
});

//when request come it will directed to adminroute then shoproute.
app.use("/admin",adminroute);
app.use(shoproute);
app.use(contactroute);
app.use(successroute);

app.use(errorcontoller.get404);
app.listen(4000);