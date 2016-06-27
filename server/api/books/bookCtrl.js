/**
 * Created by Lula on 6/26/2016.
 */
"use strict";

var bookCtrl = function(Book, Destination){

  var post = function createDestination (req,res) {
    var book = new Book(req.body);
    book.destination = req.destination;
    req.destination.books.push(book);

    Promise.all([req.destination.save(), book.save()]).then(values => {
      console.log(values[0], values[1]);
      res.status(201);
      res.send({"values": values});
    })
      .catch(
        function (err) {
          console.error("error occurred during book saving");
          res.send(err);
        }
      );
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

    Destination.update({_id:req.destination._id}, {$pull: {books: req.book._id}}, function(err, data){
      if(err) {
        return res.status(500).json({'error' : 'error in deleting address'});
      }

      req.book.remove();
      res.json(data);

    });

    // req.destination.books.pull({ _id: req.book._id }); // removed
    // Promise.all([req.destination.save(), req.book.remove()]).then(values => {
    //   console.log(values);
    //   res.status(201);
    //   res.send({"message": "book removed"});
    // })
    // .catch(
    //   function (err) {
    //     console.error("error occurred during book deleting");
    //     next(err);
    //   }
    // );
  };

  return{
    post:post,
    get:getAll,
    deleteOne:deleteOne
  }
};

module.exports = bookCtrl;
