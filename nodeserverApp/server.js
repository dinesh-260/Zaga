var http =  require('http');
const express = require('express')
const app = express()


http.createServer(function(req , res){

    res.write('this is my first server program');
    res.end();
    console.log("server is created");

}).listen(260);

/// advanced version http serve using express package 

app.get('/Dinesh', function (req, res) {

    
    res.send('Hello World')
  }).listen(2000);