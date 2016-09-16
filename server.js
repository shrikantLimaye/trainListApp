var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('trainlist',['trainlist']);

app.use(express.static(__dirname + '/trainRun')); // using the static files kept in trainRun folder like HTML OR CSS

app.get('/abc',function(req,res){ //using http services from the controller and connecting the server with mongodb database 
   
   db.trainlist.find(function(err,doc){
   		//console.log(doc);
   		res.json(doc);
   });
  console.log('I received a GET request');

    
    
});

app.listen(3500); //listrning to the server on port number 3500 of the local host
console.log("Server running on port 3500");
