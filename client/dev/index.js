"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
// import {TodoCmp} from './todo/components/todo-cmp';
// bootstrap(TodoCmp, [HTTP_PROVIDERS]);
var app_component_1 = require('./vacation-chooser/components/app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
