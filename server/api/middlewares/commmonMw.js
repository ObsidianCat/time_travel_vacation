"use strict";
/**
 * Created by Lula on 6/10/2016.
 */

var Destination = require("../destinations/models/Destination");
var Book = require("../books/models/Book");
var Advice = require("./Advice");

function findItem(req, res, next, id, name){
  var model;
  var itemName;
  
  switch (name) {
    case "destinationId":
      model = Destination;
      itemName = "destination";
      break;
    case "bookId":
      model = Book;
      itemName = "book";
      break;
    case "adviceId":
      model = Advice;
      itemName = "advice";
      break;
  }
  
  model.findById(id).exec()
    .then(function(itemData) {
      if(itemData){
        req[itemName] = itemData;
        next();
      }
      else{
        res.status(404).send("No item found");
      }
    })
    .catch(function(err){
      res.status(500).send(err);
    });
};


var commonMw = {
  findItemById:findItem
};

module.exports = commonMw;
