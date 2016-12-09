"use strict";

const Destination = require("../destinations/models/Destination");
const destinationCtrl = require("../destinations/destinationCtrl.js")(Destination);
const commonMw = require("../middlewares/commmonMw");
const activitiesMw = require("../middlewares/activitiesMw");

module.exports = class DestinationsRoutes {
  static init(router) {
    router.param('destinationId', commonMw.findItemById);

    router
    .route("/api/destinations")
      .get(destinationCtrl.get)
      .post((req, res, next) => {
        destinationCtrl.create(req, res, next)
          .then(() =>{
            activitiesMw.writeActivity(req, 'created', next);
        });
      });

    router.route("/api/destinations/:destinationId")
      .get(destinationCtrl.getById)
      .delete(function(req,res, next){
          return req.destination.remove(function(err){
            if(err){
              res.status(500).send(err);
            }
            else{
              res.status(204).send("removed");
              activitiesMw.writeActivity(req, 'deleted', next);
            }
          });
        }
      )
      .put((req, res, next) =>{
        destinationCtrl.updateDestination(req, res, next)
          .then(() => {
            activitiesMw.writeActivity(req, 'updated', next);
          });
      });

    router.route("/api/destinations/fullDescription/:destinationId")
      .get(destinationCtrl.getFullDescription);

    router.route('/api/destinations/like/:destinationId').
      patch(function(req, res, next){
        req.destination.likeIt(function(destLikes){
          res.json(destLikes);
        },
        function(err){
          return next(err)
         }
        );
      });

    router.route('/api/destinations/voteTag/:destinationId').
      patch(destinationCtrl.voteForTag);

  }
}
