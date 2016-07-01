"use strict";

const TodoRoutes = require('../api/todo/routes/todo-routes');
const DestinationRoutes = require('../api/destinations/destinations-routes');
const BookRoutes = require('../api/books/books-routes');

const StaticDispatcher = require('../commons/static/index');


module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     DestinationRoutes.init(router);
     BookRoutes.init(router);
     UserRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);


     app.use('/', router);

     app.param('destinationId', function (req, res, next, id) {
       console.log('CALLED ONLY ONCE');
       next();
     });

   }
};
