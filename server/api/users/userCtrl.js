/**
 * Created by Lula on 6/26/2016.
 */
"use strict";

const Promise = require("bluebird");


var userCtrl = function(User, Destination){
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
        .then((data)=>{
          res.status(200).json(data)
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

  var getById = function(req,res){
    User.findById(req.params.userId)
      .populate([
        {
          path: 'books',
          // Get friends of friends - populate the 'friends' array for every friend
          populate: { path: 'destination' }
        },
        {
            path: 'advices',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: { path: 'destination' }
        }
      ])
      .then((data)=>{
        let convertedData = convertUserDocumentForPresentation(data);
        res.status(200).json(convertedData)
      })
      .catch(function(error){
        console.error(error);
        res.status(500).send({error});

      });

  };

  function convertUserDocumentForPresentation(document){
    const fieldsForPruning = ['advices', 'books'];
    const destinationFields = ['_id', 'placeName', 'countryName'];
    let documentForPresentation = Object.assign({}, document.toObject());

    for(let j = 0; j<fieldsForPruning.length; j++){
      let pruningField = fieldsForPruning[j];
      documentForPresentation[pruningField].forEach((item)=>{
        Object.keys(item.destination).forEach((destPropName)=>{
          let isRequiredProp = false;
          for(let i =0; i<destinationFields.length; i++){
            let curRequiredFieldName = destinationFields[i];
            if(destPropName === curRequiredFieldName){
              isRequiredProp = true;
              break;
            }
          }
          if(!isRequiredProp){
            delete item.destination[destPropName];
          }
        });
      });
    }

    return documentForPresentation;
  }

  return{
    findOrCreate,
    getAll,
    getById,
    deleteOne:deleteOne
  }
};

module.exports = userCtrl;
