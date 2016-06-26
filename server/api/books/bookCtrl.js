/**
 * Created by Lula on 6/26/2016.
 */
"use strict";

var bookCtrl = function(Book){

  var post = function createDestination (req,res) {
    var book = new Book(req.body);
    book.save();
    res.status(201);
    res.send(book);
  };
  
  return{
    post:post
  }
};

module.exports = bookCtrl;
