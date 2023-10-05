
    // "assert": "^2.0.0",
    // "bcrypt": "^5.0.1",
    // "body-parser": "^1.20.0",
    // "child_process": "^1.0.2",
    // "connect-flash": "^0.1.1",
    // "dotenv": "^16.0.1",
    // "ejs": "^3.1.8",
    // "encrypt": "^0.0.1",
    // "express": "^4.18.1",
    // "express-session": "^1.17.3",
    // "googleapis": "^105.0.0",
    // "lodash": "^4.17.21",
    // "mongodb": "^4.6.0",
    // "mongoose": "^6.3.4",
    // "mongoose-encryption": "^2.1.2",
    // "mysql": "^2.18.1",
    // "mysql2": "^2.3.3",
    // "node-telegram-bot-api": "^0.58.0",
    // "nodemon": "^2.0.16",
    // "passport": "^0.6.0",
    // "passport-google-oauth20": "^2.0.0",
    // "passport-local": "^1.0.0",
    // "passport-local-mongoose": "^7.1.2",
    // "pug": "^3.0.2",
    // "python-shell": "^3.0.1",
    // "pythonia": "^1.0.0",
    // "request": "^2.88.2",
    // "session": "^0.1.0"

//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mongodb = require("mongodb");
const assert = require("assert");
const mongoose = require("mongoose");
const _ = require("lodash");
const encrypt = require("mongoose-encryption");
const bcrypt = require("bcrypt");
const saltround = 10;
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require("passport-local-mongoose");
// passport local is required in passportlocalmongoose

const app = express();


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// buyer routes

var AccountPictureSmall = "/imgs/icons/navbar/accountPic.gif";
var currentYear = 2022;

app.get("/", function(req, res){
    res.render('Buyer/index',{ accountPicture : AccountPictureSmall, year : currentYear});
});
app.get("/Orders", function(req, res){
    res.render('Buyer/Orders',{ accountPicture : AccountPictureSmall});
});
app.get("/Requests", function(req, res){
    res.render('Buyer/requests',{ accountPicture : AccountPictureSmall});
});
app.get("/About", function(req, res){
    // res.send("<h1> THIS IS ABOUT ROUT");
    res.render("About",{ accountPicture : AccountPictureSmall});
});
app.get("/Account", function(req, res){
    res.render("Account",{ accountPicture : AccountPictureSmall});
});

app.post("/postRequest", function (req, res) {
    console.log(req.body.PostTitle);
    console.log(req.body.PostCategory);
    console.log(req.body.PostSubCategory);
    console.log(req.body.PostOption);
    res.redirect("/")
});

const port = 3000;
app.listen(port, function(){
    console.log("server started successfully on port " + port);
});