"use strict";

var destinationCtrl = function(Destination){
  var get = function getDestinations(req, res) {
    var query = {};
    if(req.query.periodStart) {
      query.artTags = {
          periodStart: {$gt: req.query.periodStart}
        }
    }

    console.log("");
    /*
    Destination.find(query, function(err, destinations){
      if(err){
        res.status(500).send(err);
      }
      else{
        res.json(destinations);
      }
    });
    */
    //
    //
    //query.elemMatch('comment', { author: 'autobot', votes: {$gte: 5}})
    //{ <field>: { $elemMatch: { <query1>, <query2>, ... } } }
    Destination.find({
      'artTags': {$elemMatch: {'periodStart':{$gt: 1500}}}
    }, function(err, destinations){
      if(err){
        res.status(500).send(err);
      }
      else{
        res.json(destinations);
      }
    });

    // Destination.find().$where(function(){
    //   this.artTags.length>1;
    // }).exec(function(err, destinations){
    //     if(err){
    //       res.status(500).send(err);
    //     }
    //     else{
    //       res.json(destinations);
    //     }
    //   });
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
