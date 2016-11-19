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
        let queryStart = parseInt(req.query.periodStart);
        let queryEnd = parseInt(req.query.periodEnd);
        query={
          $or:[
            {
              'artTags': {$elemMatch: {$and:[{periodStart:{$gte:queryStart}},{periodEnd:{$lte:queryEnd}}]}}
            },
            {
              'historyTags': {$elemMatch: {$and:[{periodStart:{$gte:queryStart}},{periodEnd:{$lte:queryEnd}}]}}
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
    destination.save().then(function(model){
      res.status(201);
      res.send(model);
      }
    )
    .catch(
      function(err){
        console.error("Destination not saved");
        res.send(err);
      }
    );
  };

  var getById = function(req,res){
    res.json(req.destination);
  };

  var getFullDescription = function(req, res, next){
    Destination.findById(req.params.destinationId)
      .populate('advices books')
      .exec()
      .then(function(destination) {
        if(destination){
          res.json(destination);
        }
        else{
          res.status(404).send("No item found");
        }
      })
      .catch(function(err){
        res.status(500).send(err);
      });

    // getById(req, res);
    // req.destination
    //   .populate('books advices') // space delimited path names
    //   .exec(function (err, story) {
    //     if (err) return handleError(err);
    //     console.log(req.destination.books, req.destination.advices);
    //     // prints "The creator is Aaron"
    //   });
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
        function(){
          res.json({"message":"success"});
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

  const updateDestination = (req, res, next)=>{
    Destination.update({_id:req.body._id}, req.body)
      .then(function(response) {
        res.json(response);
        next(err);
      })
      .catch(function(err){
        res.status(500).send(err);
        next(err);
      });
  };

  return{
    get,
    post,
    getById,
    getRandom,
    voteForTag,
    getFullDescription,
    updateDestination,
  }
};

module.exports = destinationCtrl;
