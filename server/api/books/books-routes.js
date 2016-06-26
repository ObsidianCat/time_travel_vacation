"use strict";
/**
 * Created by Lula on 6/26/2016.
 */
var Book = require("models/Book");
var bookCtrl = require("bookCtrl.js")(Book);
var bookMw = require("../middlewares/bookMw")(Book);

module.exports = class BookRoutes {
  static init(router) {
    router.use("/api/books/:bookId", bookMw.findBook);
    router
      .route("/api/books")
      .post(bookCtrl.post);
    router.route("/api/books/::bookId")
      .delete(function(req,res){
          req.destination.remove(function(err){
            if(err){
              res.status(500).send(err);
            }
            else{
              res.status(204).send("removed");
            }
          });
        }
      );
  }
};
