"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Lula on 9/9/2016.
 */
const forms_1 = require('@angular/forms');
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const app_component_1 = require('./vacation-chooser/components/app.component');
const http_1 = require('@angular/http');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
        ],
        declarations: [
            app_component_1.AppComponent,
        ],
        // providers:[
        // appRoutingProviders,
        // DestinationDataHandlerService,
        // AdviceDataHandlerService,
        // BookDataHandlerService
        // ],
        bootstrap: [app_component_1.AppComponent],
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;