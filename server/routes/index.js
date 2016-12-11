"use strict";

const express = require('express');

const TodoRoutes = require('../api/todo/routes/todo-routes');
const DestinationsRoutes = require('../api/destinations/destinations-routes');
const BooksRoutes = require('../api/books/books-routes');
const UsersRoutes = require('../api/users/users-routes');
const AdvicesRoutes = require('../api/advices/advices-routes');
const ActivitiesRoutes = require('../api/activities/activities-routes');

const StaticDispatcher = require('../commons/static/index');


module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     DestinationsRoutes.init(router);
     BooksRoutes.init(router);
     UsersRoutes.init(router);
     AdvicesRoutes.init(router);
     ActivitiesRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);

     // app.use("/vacation-chooser", express.static(__dirname + '/dist/vacation-chooser'));

     app.use('/', router);


   }
};
