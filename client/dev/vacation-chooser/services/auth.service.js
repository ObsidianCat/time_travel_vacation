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
const auth_config_1 = require("../auth.config");
const angular2_jwt_2 = require("angular2-jwt");
let Auth = class Auth {
    constructor(authHttp) {
        this.authHttp = authHttp;
        // Configure Auth0
        this.lock = new Auth0Lock(auth_config_1.myConfig.clientID, auth_config_1.myConfig.domain, {
            theme: {
                logo: './vacation-chooser/resources/images/bee_icon_small.png',
                primaryColor: '#FFA000'
            },
            redirect: true,
        });
        // Set userProfile attribute if already saved profile
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        // Add callback for lock `authenticated` event
        this.lock.on('authenticated', (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);
            this.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    // Handle error
                    alert(error);
                    return;
                }
                profile.user_metadata = profile.user_metadata || {};
                localStorage.setItem('profile', JSON.stringify(profile));
                this.userProfile = profile;
                this.findOrCreateAppUser(this.userProfile.user_id);
                // userDataHandlerService.findOrCreateAppUser(this.userProfile.user_id);
            });
        });
    }
    findOrCreateAppUser(authUserId) {
        this.authHttp.post(`api/users/`, { authUserId })
            .subscribe((responseData) => {
            this.appUserData = responseData.json();
            localStorage.setItem('appUserId', this.appUserData._id);
        }, error => console.error(error), () => console.log('Request Complete'));
    }
    login() {
        // Call the show method to display the widget.
        // TODO Change reference to window to reference from NativeReferencesService
        this.lock.show({ callbackURL: window.location.href });
    }
    ;
    authenticated() {
        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token'
        return angular2_jwt_1.tokenNotExpired();
    }
    ;
    logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('appUserId');
    }
    ;
};
Auth = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [angular2_jwt_2.AuthHttp])
], Auth);
exports.Auth = Auth;
//# sourceMappingURL=auth.service.js.map