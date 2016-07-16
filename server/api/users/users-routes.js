"use strict";
/**
 * Created by Lula on 6/26/2016.
 */
var User = require("../users/models/User");
var userCtrl = require("../users/userCtrl.js")(User);
var commonMw = require("../middlewares/commmonMw");

module.exports = class UsersRoutes {
  static init(router) {
    router.route("/api/users")
      .post(userCtrl.createOne);
    router.route("/api/users")
      .get(userCtrl.get);
    router.route("/api/users/:userId")
      .delete(userCtrl.deleteOne);
  }
};
