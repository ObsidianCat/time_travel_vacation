/**
 * Created by Lula on 6/26/2016.
 */
"use strict";

var bookCtrl = function(Book, Destination){

  var post = function createDestination (req,res, next) {
    var book = new Book(req.body);
    book.destination = req.destination;
    req.destination.books.push(book);

    Promise.all([req.destination.save(), book.save()]).then(data => {
      console.log(data);
      res.status(200).send({data:data[1]});
    },
     function(err) {
       console.error("error occurred during book saving");
       next(err);
    })
  };

  var getAll = function(req, res){
    Book.find(
      {},
      function(err, books){
        if(err){
          res.status(500).send(err);
        }
        else{
          res.json(books);
        }
      });
  };

  var deleteOne = function(req, res, next){
    req.destination.books.pull({ _id: req.book._id }); // removed
    Promise.all([req.destination.save(), req.book.remove()]).then(values => {
      console.log(values);
      res.status(204);
      res.send({"message": "book removed"});
    })
    .catch(
      function (err) {
        console.error("error occurred during book deleting");
        next(err);
      }
    );
  };

  return{
    post:post,
    get:getAll,
    deleteOne:deleteOne
  }
};

module.exports = bookCtrl;
