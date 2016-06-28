/**
 * Created by Lula on 6/28/2016.
 */
"use strict";

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var AdviceModel = new Schema({
  authorNickname:[String],
  title:String,
  body:String,
  date: { type: Date, default: Date.now },
  destination:{type:mongoose.Schema.Types.ObjectId, ref:'Destination'}
});


module.exports =  mongoose.model("Advice", AdviceModel);
