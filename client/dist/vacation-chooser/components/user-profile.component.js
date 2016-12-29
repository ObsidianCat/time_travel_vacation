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
require("rxjs/add/operator/map");
const auth_service_1 = require("../services/auth.service");
const user_data_handler_service_1 = require("../services/user-data-handler.service");
let UserProfileComponent = class UserProfileComponent {
    constructor(auth, userDataHandlerService, authHttp) {
        this.auth = auth;
        this.userDataHandlerService = userDataHandlerService;
        this.authHttp = authHttp;
        this.appUserData = {};
    }
    ngOnInit() {
        // this.authHttp.get('api/users/profile')
        //   .map(res => res.json())
        //   .subscribe(
        //     (users) => {
        //       this.users = users;
        //       console.log(users)
        //     },
        //     error => console.log(error)
        //   );
        this.userDataHandlerService.getAppUserData().subscribe((data) => {
            this.appUserData = data.json();
            console.log(data);
        }, //Bind to view
        (err) => {
            // Log errors if any
            console.log(err);
        });
    }
};
UserProfileComponent = __decorate([
    core_1.Component({
        selector: 'user-profile',
        templateUrl: 'vacation-chooser/templates/user-profile.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.Auth,
        user_data_handler_service_1.UserDataHandlerService,
        angular2_jwt_1.AuthHttp])
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map