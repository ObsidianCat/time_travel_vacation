"use strict";

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var destinationModel = new Schema({
  placeName:String,
  countryName:String,
  monthsToGo:[Number],
  date: { type: Date, default: Date.now },
  historyTags:[
    {
      name:String,
      periodStart:{type:Number, default: 0},
      periodEnd:{type:Number, default: 0},
      upvotes:{type:Number, default:0}
    }
  ],
  artTags:[
    {
      name:String,
      periodStart:{type:Number, default: 0},
      periodEnd:{type:Number, default: 0},
      upvotes:{type:Number, default:0}
    }
  ],
  books:[{type:mongoose.Schema.Types.ObjectId, ref:"Book"}]
});

module.exports =  mongoose.model("Destination", destinationModel);
