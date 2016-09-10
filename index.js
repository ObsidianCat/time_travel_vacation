// import { NgModule }       from '@angular/core';
// import { BrowserModule  } from '@angular/platform-browser';
// import { FormsModule }   from '@angular/forms';
//
//
// import {disableDeprecatedForms, provideForms} from '@angular/forms';
// import {bootstrap} from '@angular/platform-browser-dynamic';
// import {HTTP_PROVIDERS} from '@angular/http';
// import { AppComponent } from './vacation-chooser/components/app.component';
// import { APP_ROUTER_PROVIDERS } from './vacation-chooser/app.routes';
//
//
// bootstrap(AppComponent, [
//   HTTP_PROVIDERS,
//   APP_ROUTER_PROVIDERS,
//   disableDeprecatedForms(),
//   provideForms()
// ])
// .catch(err => console.error(err));
"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const app_module_1 = require('./vacation-chooser/app.module');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.error(err));
