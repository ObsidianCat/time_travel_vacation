var Activity = require("../activities/models/activity");

function writeActivity(req, status, next){
  const message = `Destination ${req.body.placeName} ${status}`;
  let activity = new Activity({message:message});
  activity.save().then(function(){
      next();
    }
  )
  .catch(
    function(err){
      console.error("Destination not saved");
      next(err);
    }
  );
};


var activitiesMw = {
  writeActivity
};

module.exports = activitiesMw;
