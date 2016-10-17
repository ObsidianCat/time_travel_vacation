/**
 * Created by Lula on 6/26/2016.
 */
"use strict";

var userCtrl = function(User){
  var findOrCreate = function createDestination (req, res, next) {
    var currentUserId = req.body.authUserId;
    User.findById(req.params.destinationId);
    var user = new User(req.body);
    res.status(204).send("findOrCreate run on user controller");
    // user.save().then(function(model){
    //     res.status(201);
    //     res.send(model);
    //   }
    // )
    // .catch(
    //   function(err){
    //     console.error("User not saved");
    //     next(err);
    //   }
    // );
  };

  var getAll = function(req, res){
    User.find(
      {},
      function(err, users){
        if(err){
          res.status(500).send(err);
        }
        else{
          res.json(users);
        }
      });
  };

  var deleteOne = function(req, res, next){
    req.user.remove(function(err){
      if(err){
        res.status(500).send(err);
      }
      else{
        res.status(204).send("removed");
      }
    });
  };

  return{
    findOrCreate,
    get:getAll,
    deleteOne:deleteOne
  }
};

module.exports = userCtrl;
