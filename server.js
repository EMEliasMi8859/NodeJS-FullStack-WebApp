// jshint: using ES6

const express = require ('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();


const MyWebsite = express();
MyWebsite.use(express.static('static'));
MyWebsite.use(bodyParser.urlencoded({extended: true}));
MyWebsite.set('views', './templates');
MyWebsite.set('view engine', 'ejs');

// sql connection
var mysql_config = {
    host:       process.env.MYSQL_HOST,
    database:   process.env.MYSQL_DATABASE,
    user:       process.env.MYSQL_USER,
    password:   process.env.MYSQL_PASSWORD
}
var Mysqlconnection = mysql.createConnection(mysql_config);
Mysqlconnection.connect(function(err){
    if (err){
        return console.log(err);
    }
    console.log(`Mysql connected successefully to ${process.env.MYSQL_DATABASE} data base`);
});


var CollectionLinks = "";


// ejs routes
MyWebsite.get("/",function(req, res){
    // var data;
    Mysqlconnection.query("SELECT * FROM collections", function(error, result){
        if (error){
            return res.render('index');
        }
        return res.render("index", {collections:result , linksResults:CollectionLinks});
    });
    // return res.render("index", {resources: data, target: data.length});
});




// background routes
/// when want to delete a row run this query ALTER TABLE tableName AUTO_INCREMENT=1
MyWebsite.post("/Collection", function(req, res){
    links = req.body.Links;
    console.log("number " + links);
    Mysqlconnection.query(`SELECT * FROM links WHERE Collection = ${links}`, function(error, result){
        if(!error){
            CollectionLinks = result;
            // newTeamPostQuery.save().then(savedPost=>{
                // res.status(204).send({linksResults: result});
            // }).catch(error=>{
            //     console.log(error);
            // });
            res.redirect('/');
        }else{
            console.log("error accured "+ error);
        }
    });
});
MyWebsite.post("/CreateNewCollection", function(req, res){

});





const port = process.env.SERVER_PORT;
MyWebsite.listen(port, function(err){
    !err ? console.log(`MyWebsite is listening successfully on port: ${port}`) : console.log(`erorr accured:\n ${err}`);
});