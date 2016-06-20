"use strict";

var destinationCtrl = function(Destination){
  var get = function getDestinations(req, res) {
    var query = {};
    if(req.query.periodStart) {
      //get items in range of time
      query={
        $or:[
          {
            'artTags': {$elemMatch: {$and:[{periodStart:{$gte:req.query.periodStart}},{periodEnd:{$lte:req.query.periodEnd}}]}}
          },
          {
            'historyTags': {$elemMatch: {$and:[{periodStart:{$gte:req.query.periodStart}},{periodEnd:{$lte:req.query.periodEnd}}]}}
          }
        ]
      }
    }
    else if(req.query.historyTags){
      query = {
        'historyTags': {$elemMatch: {name:{ $in:req.query.historyTags}}}
      }
    }
    else if (req.query.artTags){
      query = {
        'artTags': {$elemMatch: {name:{ $in:req.query.artTags}}}
      }
    }


    Destination.find(
      query,
      function(err, destinations){
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
