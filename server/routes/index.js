"use strict";

const TodoRoutes = require('../api/todo/routes/todo-routes');
const DestinationRoutes = require('../api/destinations/routes/destinations-routes');

const StaticDispatcher = require('../commons/static/index');


module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     DestinationRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);


     app.use('/', router);
   }
}
