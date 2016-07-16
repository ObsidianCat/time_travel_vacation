"use strict";
/**
 * Created by Lula on 6/28/2016.
 */

var Destination = require("../destinations/models/Destination");
var User = require("../users/models/User");
var Advice = require("../advices/models/Advice");

var adviceCtrl = require("../advices/adviceCtrl.js")(User, Destination, Advice);
var commonMw = require("../middlewares/commmonMw");

module.exports = class AdvicesRoutes {
  static init(router) {
    router.param('destinationId', commonMw.findItemById);
    router.param('adviceId', commonMw.findItemById);
    router.param('userId', commonMw.findItemById);

    router.route("/api/advices/:destinationId/:userId")
      .post(adviceCtrl.post);
    router.route("/api/advices")
      .get(adviceCtrl.get);
    router.route("/api/advices/:destinationId/:userId/:adviceId")
      .delete(adviceCtrl.deleteOne);
  }
};
