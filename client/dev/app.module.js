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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt');
var app_component_1 = require('./vacation-chooser/components/app.component');
var home_component_1 = require('./vacation-chooser/components/home.component');
var finder_component_1 = require('./vacation-chooser/components/finder.component');
var show_list_component_1 = require('./vacation-chooser/components/show-list.component');
var show_random_component_1 = require('./vacation-chooser/components/show-random.component');
var dest_view_component_1 = require('./vacation-chooser/components/dest-view.component');
var dest_preview_component_1 = require('./vacation-chooser/components/dest-preview.component');
var add_dest_form_component_1 = require('./vacation-chooser/components/add-dest-form.component');
var period_finder_component_1 = require('./vacation-chooser/components/period-finder.component');
var history_tags_finder_component_1 = require('./vacation-chooser/components/history-tags-finder.component');
var art_tags_finder_component_1 = require('./vacation-chooser/components/art-tags-finder.component');
// import { UserAuthComponent }   from './vacation-chooser/components/user-auth.component';
var book_form_component_1 = require('./vacation-chooser/components/book-form.component');
var advice_form_component_1 = require('./vacation-chooser/components/advice-form.component');
var destination_data_handler_service_1 = require('./vacation-chooser/services/destination-data-handler.service');
var advice_data_handler_service_1 = require('./vacation-chooser/services/advice-data-handler.service');
var book_data_handler_service_1 = require('./vacation-chooser/services/book-data-handler.service');
var native_references_service_1 = require('./vacation-chooser/services/native-references.service');
// import { Auth } from './vacation-chooser/services/auth.service';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
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
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                dest_preview_component_1.DestPreviewComponent,
                finder_component_1.FinderComponent,
                show_list_component_1.ShowListComponent,
                show_random_component_1.ShowRandomComponent,
                dest_view_component_1.DestViewComponent,
                add_dest_form_component_1.AddDestFormComponent,
                period_finder_component_1.PeriodFinderComponent,
                history_tags_finder_component_1.HistoryTagsFinderComponent,
                art_tags_finder_component_1.ArtTagsFinderComponent,
                book_form_component_1.BookFormComponent,
                advice_form_component_1.AdviceFormComponent,
            ],
            providers: [
                angular2_jwt_1.AUTH_PROVIDERS,
                destination_data_handler_service_1.DestinationDataHandlerService,
                advice_data_handler_service_1.AdviceDataHandlerService,
                book_data_handler_service_1.BookDataHandlerService,
                native_references_service_1.NativeReferencesService,
            ],
            bootstrap: [
                app_component_1.AppComponent,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
