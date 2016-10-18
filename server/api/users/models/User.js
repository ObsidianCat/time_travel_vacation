const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
  mongoose.Promise = require('bluebird');


var userModel = new Schema({
  authUserId:String,
  advices:[{type:mongoose.Schema.Types.ObjectId, ref:'Advice'}]
});


module.exports = mongoose.model("User", userModel);
