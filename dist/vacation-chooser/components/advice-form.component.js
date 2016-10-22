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
 * Created by Lula on 7/12/2016.
 */
const core_1 = require('@angular/core');
const advice_data_handler_service_1 = require("../services/advice-data-handler.service");
const user_data_handler_service_1 = require('../services/user-data-handler.service');
const auth_service_1 = require('../services/auth.service');
let AdviceFormComponent = class AdviceFormComponent {
    constructor(dataHandlerService, userDataHandlerService, auth) {
        this.dataHandlerService = dataHandlerService;
        this.userDataHandlerService = userDataHandlerService;
        this.auth = auth;
        this.active = true;
        this.submitted = false;
        this.newAdviceAdded = new core_1.EventEmitter();
        this.model = {};
    }
    onSubmit() {
        this.submitted = true;
        console.log(this.model);
        this.userId = this.userDataHandlerService.getStoredAppUserId();
        this.dataHandlerService.saveAdvice(this.model, this.destId, this.userId)
            .then((data) => {
            this.newAdviceAdded.emit(data);
        })
            .catch((err) => {
            console.error(err);
        });
    }
    get diagnostic() { return JSON.stringify(this.model); }
};
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], AdviceFormComponent.prototype, "newAdviceAdded", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], AdviceFormComponent.prototype, "destId", void 0);
AdviceFormComponent = __decorate([
    core_1.Component({
        templateUrl: 'vacation-chooser/templates/advice-form.component.html',
        selector: 'advice-form',
    }), 
    __metadata('design:paramtypes', [advice_data_handler_service_1.AdviceDataHandlerService, user_data_handler_service_1.UserDataHandlerService, auth_service_1.Auth])
], AdviceFormComponent);
exports.AdviceFormComponent = AdviceFormComponent;
