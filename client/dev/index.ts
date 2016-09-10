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


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './vacation-chooser/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
