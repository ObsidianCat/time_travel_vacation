var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var userModel = new Schema({
  firstName:String,
  lastName:String,
  nickname:String,
  email:String,
  advices:[{type:mongoose.Schema.Types.ObjectId, ref:'Advice'}]
});


module.exports = mongoose.model("User", userModel);