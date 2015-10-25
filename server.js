
// server.js

// BASE SETUP
// ==============================================


//requirements
var express = require('express');
var http    = require('http');
var fs      = require('fs');
var path    = require('path');


// set base variables
var app     = express();
var port    = process.env.PORT || 8080;

//get instance of router
var router = express.Router();
// ROUTES
// ==============================================

app.use(router);

//looks for all static files inside index.html
app.use(express.static(path.join(__dirname)));

// we'll create our routes here
app.get('/', function(req, res) {

    fs.readFile('../bootstrap template/index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });

});
app.use("/",router);
// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port)
