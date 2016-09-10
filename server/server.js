'use strict';

if ('production' === process.env.NODE_ENV)
    require('newrelic');

const PORT = process.env.PORT || 3333;

const os = require('os');
const http = require('http');
const express = require('express');
const RoutesConfig = require('./config/routes.conf');
const DBConfig = require('./config/db.conf');
const Routes = require('./routes/index');
const stormpath = require('express-stormpath');

const app = express();
app.use(stormpath.init(app, { website: true }));

RoutesConfig.init(app);
DBConfig.init();
Routes.init(app, express.Router());

const server = http.createServer(app);
app.on('stormpath.ready', function() {
  server
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });
});

// export STORMPATH_CLIENT_APIKEY_ID=5JX34WWYVVMYVSJEWCYHBXW5U
// export STORMPATH_CLIENT_APIKEY_SECRET=+cor2P2G6Zaf9avztgKTXOHEAULJ0KQYY1yyYpgjF+4
// export STORMPATH_APPLICATION_HREF=https://api.stormpath.com/v1/applications/1nUfmGGssPScqmHyPJa3Vr

