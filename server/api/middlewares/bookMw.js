/**
 * Created by Lula on 6/26/2016.
 */
/**
 * Created by Lula on 6/10/2016.
 */
//
// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

var bookMiddlewares = function(Book){
  var findBook = function(req, res, next){
    Book.findById(req.params.bookId).exec()
      .then(function(book) {
        if(book){
          req.book = book;
          next();
        }
        else{
          res.status(404).send("No book found");
        }
      })
      .catch(function(err){
        res.status(500).send(err);
      });
  };


  return {
    findBook:findBook
  }
};



module.exports = bookMiddlewares;
