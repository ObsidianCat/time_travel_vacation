/**
 * Created by Lula on 6/26/2016.
 */
var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var userModel = new Schema({
  lastName:String,
  firstName:String,
  email:String
});


module.exports = mongoose.model("User", userModel);
