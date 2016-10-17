var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var userModel = new Schema({
  authUserId:String,
  advices:[{type:mongoose.Schema.Types.ObjectId, ref:'Advice'}]
});


module.exports = mongoose.model("User", userModel);
