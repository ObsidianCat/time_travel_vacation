"use strict";

const activityCtrl = function(Activity){
  var getAll = function(req, res){
    Activity.find(
      {},
      function(err, advices){
        if(err){
          res.status(500).send(err);
        }
        else{
          res.json(activities);
        }
      });
  };


  return{
    getAll,
  }
};

module.exports = activityCtrl;
