"use strict";

var Activity = require("../activities/models/activity");

var activityCtrl = require("../activities/activityCtrl.js")(Activity);

module.exports = class ActivitiesRoutes {
  static init(router) {
    router.route("/api/activities")
      .get(activityCtrl.getAll);
  }
};
