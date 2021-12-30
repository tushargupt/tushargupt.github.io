//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

app.get("/", function(req, res){
    res.render("home");
});
app.get("/about", function(req, res){
  res.render("about");
});
app.get("/projects", function(req, res){
  res.render("project");
});
app.get("/projects/page/2", function(req, res){
  res.render("project2");
});
app.get("/contact", function(req, res){
  res.render("contact");
});
app.get("/blog", function(req, res){
  res.render("blog");
});