"use strict";

var destinationCtrl = function(Destination){
  function getAll(req, res){
    Destination.find({}, function(err, destinations){
      if(err){
        res.status(500).send(err);
      }
      else{
        res.json(destinations);
      }
    });
  }

  var get = function getDestinations(req, res) {
    var query = {};
    if(req.query.bobo) {
      //do some querrying
    }
    else{
      //bring all
      getAll(req, res);

    }

  };

  var post = function createDestination (req,res) {
    var destination = new Destination(req.body);
    destination.save();
    res.status(201);
    res.send(destination);
  };

  var getById = function(req,res){
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
    getById:getById,
    getRandom:getRandom
  }
};

module.exports = destinationCtrl;
