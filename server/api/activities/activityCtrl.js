"use strict";

const activityCtrl = function(Activity){
  var getRecent = function(req, res){
    Activity.find({}).sort('-date').limit(10).exec().then((activities) => {
      res.json(activities);
    })
    .catch((err)=>{
      res.status(500).send(err);
    });

  };

  return{
    getRecent,
  }
};

module.exports = activityCtrl;
