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
const router_1 = require("@angular/router");
const home_component_1 = require("../home/home.component");
const finder_component_1 = require("../finder/finder.component");
const show_list_component_1 = require("../components/show-list.component");
const show_random_component_1 = require("../components/show-random.component");
const dest_view_component_1 = require("../components/dest-view.component");
const user_profile_component_1 = require("../user-profile/user-profile.component");
const appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'find', component: finder_component_1.FinderComponent },
    { path: 'browse', component: show_list_component_1.ShowListComponent },
    { path: 'inspire', component: show_random_component_1.ShowRandomComponent },
    { path: 'destination/:id', component: dest_view_component_1.DestViewComponent },
    { path: 'user-profile', component: user_profile_component_1.UserProfileComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map