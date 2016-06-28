"use strict";
/**
 * Created by Lula on 6/28/2016.
 */

var Destination = require("../destinations/models/Destination");
var Advice = require("../advices/models/Advice");
var adviceCtrl = require("../advices/adviceCtrl.js")(Advice, Destination);
var commonMw = require("../middlewares/commmonMw")();

module.exports = class BookRoutes {
  static init(router) {
    router.param('destinationId', commonMw.findItemById);

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
