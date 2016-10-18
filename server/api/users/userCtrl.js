/**
 * Created by Lula on 6/26/2016.
 */
"use strict";

const Promise = require("bluebird");


var userCtrl = function(User){
  var findOrCreate = function (req, res, next) {
    var currentAuthId = req.body.authUserId;

    function findUserByAuthId(authId){
      User.findOne({ authUserId: currentAuthId })
        .then(function(data){
          if(data){
            return Promise.resolve(data);
          }
          else{
            var user = new User(req.body);
            return user.save();
          }
        })
        .then(function(data){
          console.log(data);
          res.status(200).send({message:"User exist or created"});
        })
        .catch(function(error){
          console.error(error);
          res.status(500).send({error});

        });
    }

    findUserByAuthId(currentAuthId);

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
