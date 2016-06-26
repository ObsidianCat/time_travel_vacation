"use strict";

var destinationCtrl = function(Destination){
  var get = function getDestinations(req, res) {
    var query = {};
    //get one random destination
    if(req.query.random){
      getRandom(req, res)
    }
    //get all or filter them
    else{
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

  var voteForTag = function vote(req, res, next){
    var voteDetails = {};
    if(req.query.tagType && req.query.tagId && req.query.voteType) {
      voteDetails.tagType = req.query.tagType;
      voteDetails.tagId = req.query.tagId;
      voteDetails.voteType = req.query.voteType;
      req.destination.voteTag(
        voteDetails,
        function(destination){
          res.json(destination);
        },
        function(err){
          return next(err)
        }
      );
    }
    else{
      res.json({"message":"wrong parameters"});

    }
  };

  return{
    get:get,
    post:post,
    getById:getById,
    getRandom:getRandom,
    voteForTag:voteForTag

  }
};

module.exports = destinationCtrl;
