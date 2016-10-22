const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
  mongoose.Promise = require('bluebird');


var userModel = new Schema({
  authUserId:String,
  advices:[{type:mongoose.Schema.Types.ObjectId, ref:'Advice'}],
  books:[{type:mongoose.Schema.Types.ObjectId, ref:'Book'}]

});


module.exports = mongoose.model("User", userModel);
