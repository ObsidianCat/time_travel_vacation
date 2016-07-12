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
 * Created by Lula on 7/3/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var destination_data_handler_service_1 = require("../services/destination-data-handler.service");
var Advice_data_handler_service_1 = require("../services/Advice-data-handler.service");
var AppComponent = (function () {
    function AppComponent() {
        this.name = "Time traveler";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'vacations-app',
            templateUrl: 'vacation-chooser/templates/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [destination_data_handler_service_1.DestinationDataHandlerService, Advice_data_handler_service_1.AdviceDataHandlerService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
