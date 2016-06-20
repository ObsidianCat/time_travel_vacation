"use strict";

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var destinationModel = new Schema({
  placeName:String,
  countryName:String,
  likes:{type:Number, default:0},
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

destinationModel.method({
  likeDestination: function(success, error) {
    this.likes +=1;
    this.save()
      .then(function(){
          console.log("succes");
        }
      )
      .catch(
        function(){
          console.log("error");
        }
      )
  }
});

module.exports =  mongoose.model("Destination", destinationModel);
