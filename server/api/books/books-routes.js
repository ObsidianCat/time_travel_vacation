"use strict";
/**
 * Created by Lula on 6/26/2016.
 */
var Book = require("../books/models/Book");
var Destination = require("../destinations/models/Destination");
var bookCtrl = require("../books/bookCtrl.js")(Book, Destination);
var bookMw = require("../middlewares/bookMw")(Book);
var destinationMw = require("../middlewares/destinationMw")(Destination);

module.exports = class BookRoutes {
  static init(router) {
    router.param('destinationId', destinationMw.findDestination);
    router.param("bookId", bookMw.findBook);

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
