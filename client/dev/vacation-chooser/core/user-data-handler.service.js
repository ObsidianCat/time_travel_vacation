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
const core_1 = require("@angular/core");
const angular2_jwt_1 = require("angular2-jwt");
let UserDataHandlerService = class UserDataHandlerService {
    constructor(authHttp) {
        this.authHttp = authHttp;
    }
    findOrCreateAppUser(authUserId) {
        this.authHttp.post(`api/users/`, { authUserId })
            .subscribe((responseData) => {
            this.appUserData = responseData.json();
            localStorage.setItem('appUserId', this.appUserData._id);
        }, error => console.error(error), () => console.log('Request Complete'));
    }
    getStoredAppUserId() {
        return localStorage.getItem('appUserId');
    }
    ;
    getAppUserData() {
        let userAppId = localStorage.getItem('appUserId');
        return this.authHttp.get(`api/users/${userAppId}`);
    }
};
UserDataHandlerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp])
], UserDataHandlerService);
exports.UserDataHandlerService = UserDataHandlerService;
//# sourceMappingURL=user-data-handler.service.js.map