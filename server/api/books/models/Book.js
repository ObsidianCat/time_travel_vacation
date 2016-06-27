"use strict";

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var BookModel = new Schema({
  author:[String],
  title:String,
  yearOfPublication:Number,
  amazonLink: String,
  destination:{type:mongoose.Schema.Types.ObjectId, ref:'Destination'}
});


module.exports =  mongoose.model("Book", BookModel);
