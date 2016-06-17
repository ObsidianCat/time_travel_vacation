"use strict";

var destinationCtrl = function(Destination){
  var get = function getDestinations(req, res) {
    var query = {};
    Destination.find(query, function(err, destinations){
      if(err){
        res.status(500).send(err);
      }
      else{
        res.json(destinations);
      }
    });
  };

  var post = function createDestination (req,res) {
    var destination = new Destination(req.body);
    destination.save();
    res.status(201);
    res.send(destination);
  };

  var getOne = function(req,res){
    res.json(req.destination);
  };

  var getRandom = function getOneRandomItem(req, res){
    Destination.count().exec(function(err, count){
      var random = Math.floor(Math.random() * count);

      Destination.findOne().skip(random).exec(
        function (err, destinations) {
          if(err){
            res.status(500).send(err);
          }
          else{
            res.json(destinations);
          }
        });
    });
  };

  return{
    get:get,
    post:post,
    getOne:getOne,
    getRandom:getRandom
  }
};

module.exports = destinationCtrl;
