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
      votes:{type:Number, default:0}
    }
  ],
  artTags:[
    {
      name:String,
      periodStart:{type:Number, default: 0},
      periodEnd:{type:Number, default: 0},
      votes:{type:Number, default:0}
    }
  ],
  books:[{type:mongoose.Schema.Types.ObjectId, ref:"Book"}],
  advices:[{type:mongoose.Schema.Types.ObjectId, ref:"Advice"}]

});

destinationModel.method({
  likeIt: function(success, handleErr) {
    this.likes +=1;
    this.save()
      .then(function(model){
          console.log("succes");
          success(model);
        }
      )
      .catch(
        function(err){
          handleErr(err);
        }
      )
  },
  voteTag: function voteForTag(data, success, handleErr){
    var setOfTags = this[data.tagType];
    for(let i = 0; i<setOfTags.length; i++){
      let tag = setOfTags[i];
      if(tag._id == data.tagId){
        if(data.voteType == "up"){
          tag.votes++;
        }
        else{
          tag.votes--;
        }
        break;
      }
    }
    this.save()
      .then(function(model){
          success(model);
        }
      )
      .catch(
        function(err){
          handleErr(err);
        }
      )

  }
});

module.exports =  mongoose.model("Destination", destinationModel);
