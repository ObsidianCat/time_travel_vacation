/**
 * Created by Lula on 6/10/2016.
 */
// var Destination = require("../models/Destination");
var destinationMiddlewares = function(Destination){
  var findDestination = function(req, res, next){
    Destination.findById(req.params.destinationId, function(err, destination){
      if(err){
        res.status(500).send(err);
      }
      else if(destination){
        req.destination = destination;
        next();
      }
      else{
        res.status(404).send("No destination found");
      }
    })
  };
  
  return {
    findDestination:findDestination
  }
};



module.exports = destinationMiddlewares;