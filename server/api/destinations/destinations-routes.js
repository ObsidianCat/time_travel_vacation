"use strict";

// var express = require('express'),
//   router = express.Router();

var Destination = require("../destinations/models/Destination");
var destinationCtrl = require("../destinations/destinationCtrl.js")(Destination);
var destinationMw = require("../middlewares/destinationMw")(Destination);

module.exports = class DestinationsRoutes {
  static init(router) {
    router.param('destinationId', destinationMw.findDestination);

    router
    .route("/api/destinations")
      .get(destinationCtrl.get)
      .post(destinationCtrl.post);

    router.route("/api/destinations/:destinationId")
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
        req.destination.likeIt(function(destination){
          res.json(destination);
        },
        function(err){
          return next(err)
         }
        );
      });

    router.route('/api/destinations/:destinationId/voteTag').
      patch(destinationCtrl.voteForTag);

  }
}
