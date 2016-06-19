"use strict";

// var express = require('express'),
//   router = express.Router();

var Destination = require("../models/Destination");
var destinationCtrl = require("../controllers/destinationCtrl.js")(Destination);
var destinationMw = require("../middlewares/destinationsMw")(Destination);

//Middlewares

module.exports = class DestinationsRoutes {
  static init(router) {
    router.use("/api/destinations/:destinationId", destinationMw.findDestination);

    router
    .route("/api/destinations")
      .get(destinationCtrl.get)
      .post(destinationCtrl.post);

    router
      .route("/api/destinations/:destinationId")
      .get(destinationCtrl.getById)
      .delete(function(req,res){
          req.destination.remove(function(err){
            if(err){
              res.status(500).send(err);
            }
            else{
              res.status(204).send("removed");
            }
          });
        }
      );

    router.route('/api/destinations/:destinationId/like').
      patch(function(req, res, next){

      });
    router
      .route("/api/destinationsRandom")
      .get(destinationCtrl.getRandom);
  }
}
