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
const http_1 = require("@angular/http");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const angular2_jwt_1 = require("angular2-jwt");
const app_component_1 = require("./vacation-chooser/components/app.component");
const home_component_1 = require("./vacation-chooser/home/home.component");
const show_list_component_1 = require("./vacation-chooser/components/show-list.component");
const show_random_component_1 = require("./vacation-chooser/components/show-random.component");
const dest_view_component_1 = require("./vacation-chooser/components/dest-view.component");
const dest_preview_component_1 = require("./vacation-chooser/components/dest-preview.component");
const add_dest_form_component_1 = require("./vacation-chooser/components/add-dest-form.component");
const user_profile_component_1 = require("./vacation-chooser/components/user-profile.component");
const book_form_component_1 = require("./vacation-chooser/components/book-form.component");
const advice_form_component_1 = require("./vacation-chooser/components/advice-form.component");
const destination_data_handler_service_1 = require("./vacation-chooser/services/destination-data-handler.service");
const advice_data_handler_service_1 = require("./vacation-chooser/services/advice-data-handler.service");
const book_data_handler_service_1 = require("./vacation-chooser/services/book-data-handler.service");
const native_references_service_1 = require("./vacation-chooser/services/native-references.service");
const user_data_handler_service_1 = require("./vacation-chooser/services/user-data-handler.service");
const finder_module_1 = require("./vacation-chooser/finder/finder.module");
const finder_component_1 = require("./vacation-chooser/finder/finder.component");
const shared_module_1 = require("./vacation-chooser/shared/shared.module");
// import { Auth } from './vacation-chooser/services/auth.service';
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: '',
                    redirectTo: '/home',
                    pathMatch: 'full' },
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'find', component: finder_component_1.FinderComponent },
                { path: 'browse', component: show_list_component_1.ShowListComponent },
                { path: 'inspire', component: show_random_component_1.ShowRandomComponent },
                { path: 'destination/:id', component: dest_view_component_1.DestViewComponent },
                { path: 'add-destination', component: add_dest_form_component_1.AddDestFormComponent },
                { path: 'user-profile', component: user_profile_component_1.UserProfileComponent },
            ]),
            finder_module_1.FinderModule,
            shared_module_1.SharedModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            dest_preview_component_1.DestPreviewComponent,
            show_list_component_1.ShowListComponent,
            show_random_component_1.ShowRandomComponent,
            dest_view_component_1.DestViewComponent,
            add_dest_form_component_1.AddDestFormComponent,
            book_form_component_1.BookFormComponent,
            advice_form_component_1.AdviceFormComponent,
            user_profile_component_1.UserProfileComponent,
        ],
        providers: [
            angular2_jwt_1.AUTH_PROVIDERS,
            destination_data_handler_service_1.DestinationDataHandlerService,
            advice_data_handler_service_1.AdviceDataHandlerService,
            book_data_handler_service_1.BookDataHandlerService,
            native_references_service_1.NativeReferencesService,
            user_data_handler_service_1.UserDataHandlerService,
        ],
        bootstrap: [
            app_component_1.AppComponent,
        ],
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map