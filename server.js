var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('trainlist',['trainlist']);

app.use(express.static(__dirname + '/trainRun'));

app.get('/abc',function(req,res){
   
   db.trainlist.find(function(err,doc){
   		//console.log(doc);
   		res.json(doc);
   });
  console.log('I received a GET request');

    
    
});

app.listen(3500);
console.log("Server running on port 3500");