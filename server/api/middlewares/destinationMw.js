/**
 * Created by Lula on 6/10/2016.
 */
//
// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

var destinationMw = function(Destination){
  var findDestination = function(req, res, next, id){
    console.log(id);
    Destination.findById(id).exec()
      .then(function(destination) {
        if(destination){
          req.destination = destination;
          next();
        }
        else{
          res.status(404).send("No destination found");
        }
      })
      .catch(function(err){
        res.status(500).send(err);
      });
  };


  return {
    findDestination:findDestination
  }
};



module.exports = destinationMw;
