"use strict";
/**
 * Created by Lula on 6/26/2016.
 */
var Book = require("../books/models/Book");
var Destination = require("../destinations/models/Destination");
var bookCtrl = require("../books/bookCtrl.js")(Book, Destination);
var commonMw = require("../middlewares/commmonMw");

module.exports = class BookRoutes {
  static init(router) {
    router.param('destinationId', commonMw.findItemById);
    router.param('bookId', commonMw.findItemById);

    router
      .route("/api/books/:destinationId")
      .post(bookCtrl.post);
    router
      .route("/api/books")
      .get(bookCtrl.get);

    router.route("/api/books/:destinationId/:bookId")
      .delete(bookCtrl.deleteOne);
  }
};
