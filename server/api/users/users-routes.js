"use strict";
/**
 * Created by Lula on 6/26/2016.
 */
const User = require("../users/models/User");
const userCtrl = require("../users/userCtrl.js")(User);
const jwt = require('express-jwt');
const commonMw = require("../middlewares/commmonMw");
const authConst = require('../../constants/auth.json');

// Authentication middleware provided by express-jwt.
// This middleware will check incoming requests for a valid
// JWT on any routes that it is applied to.
var authCheck = jwt({
  secret: new Buffer(authConst.secret, 'base64'),
  audience: authConst.clientID
});


var usersList = [
  { id: 1, name: 'Todd Motto', image: 'image-1.jpg' },
  { id: 2, name: 'Brad Green', image: 'image-2.jpg' },
  { id: 3, name: 'Igor Minar', image: 'image-3.jpg' }
];


module.exports = class UsersRoutes {
  static init(router) {
    router.route("/api/users")
      .get(userCtrl.getAll)
      .delete(userCtrl.deleteOne)
      .post(userCtrl.findOrCreate);

    router.route("/api/users/:userId")
      .get(userCtrl.getById);

    router.route("/api/users/profile")
      .get(authCheck, function(req, res) {
        res.json(usersList);
      });
  }
};
