var path = require("path");
var express = require("express");


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/bio", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/bio.html"));
  });

  app.get("/projects", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/projects.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/contact.html"));
  });

  app.use("/public", express.static(path.join(__dirname, "../public")));

  app.get("*", function(req, res) {
    res.redirect("/");
  });
};
