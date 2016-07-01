"use strict";
/**
 * Created by Lula on 6/28/2016.
 */

var Destination = require("../destinations/models/Destination");
var Advice = require("models/Advice");
var adviceCtrl = require("../advices/adviceCtrl.js")(Advice, Destination);
var commonMw = require("../middlewares/commmonMw")();

module.exports = class AdviceRoutes {
  static init(router) {
    router.param('destinationId', commonMw.findItemById);
    router.param('adviceId', commonMw.findItemById);

    router.route("/api/advices/:destinationId")
      .post(adviceCtrl.post);
    router.route("/api/advices")
      .get(adviceCtrl.get);

    router.route("/api/books/:destinationId/:adviceId")
      .delete(adviceCtrl.deleteOne);
  }
};
