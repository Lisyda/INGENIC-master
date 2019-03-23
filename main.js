'use strict';

//require
var express = require("express");


var port = process.env.PORT || 8081;

var app = express();

app.set("view engine", "ejs");
app.set("views", "templates");
app.use(express.static("static"));


//HOMEPAGE
app.get('/', function(req, res) {
    res.render('index.ejs');
});

//ABOUT
app.get('/about', function(req, res) {
    res.render('about');
});

//CONTACT
app.get('/contact', function(req, res) {
    res.render('contact');
});

//NEWS
app.get('/news', function(req, res) {
    res.render('news');
});

//RESOURCES
app.get('/resources', function(req, res) {
    res.render('resources');
});


//UNIVERSITIES INVOLVED
app.get('/universities', function(req, res) {
    res.render('universities');
});



//set the server to listen on a port
app.listen(port);


console.log("server running http://localhost:" + port);

