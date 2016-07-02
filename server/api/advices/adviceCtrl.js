/**
 * Created by Lula on 6/26/2016.
 */
"use strict";

var adviceCtrl = function(User, Destination, Advice){

  var createOne = function createOne (req,res, next) {
    var advice = new Advice(req.body);
    advice.destination = req.destination;
    advice.user = req.user;
    advice.userNickname = req.user.nickname;

    req.user.advices.push(advice);
    req.destination.advices.push(advice);

    Promise.all([req.user.save(), req.destination.save(), advice.save()]).then(data => {
        console.log(data);
        res.status(201).send({data:data[2]});
      },
      function(err) {
        console.error("error occurred during advice saving");
        next(err);
      })
  };

  var getAll = function(req, res){
    Advice.find(
      {},
      function(err, advices){
        if(err){
          res.status(500).send(err);
        }
        else{
          res.json(advices);
        }
      });
  };

  var deleteOne = function(req, res, next){
    //remove references to object
    req.destination.advices.pull({ _id: req.advice._id });
    req.user.advices.pull({ _id: req.advice._id });

    Promise.all([
      req.destination.save(),
      req.user.save(),
      req.advice.remove()
    ])
      .then(values => {
      res.status(204);
      res.send({"message": "advice removed"});
    })
      .catch(
        function (err) {
          console.error("error occurred during advice deleting");
          next(err);
        }
      );
  };

  return{
    post:createOne,
    get:getAll,
    deleteOne:deleteOne
  }
};

module.exports = adviceCtrl;
