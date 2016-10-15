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
const app_component_1 = require('./components/app.component');
const add_dest_form_component_1 = require('./components/add-dest-form.component');
const advice_form_component_1 = require('./components/advice-form.component');
const art_tags_finder_component_1 = require('./components/art-tags-finder.component');
const book_form_component_1 = require('./components/book-form.component');
const dest_preview_component_1 = require('./components/dest-preview.component');
const dest_view_component_1 = require('./components/dest-view.component');
const finder_component_1 = require('./components/finder.component');
const history_tags_finder_component_1 = require('./components/history-tags-finder.component');
const home_component_1 = require('./components/home.component');
const period_finder_component_1 = require('./components/period-finder.component');
const show_list_component_1 = require('./components/show-list.component');
const show_random_component_1 = require('./components/show-random.component');
const http_1 = require('@angular/http');
const app_routes_1 = require('./app.routes');
const destination_data_handler_service_1 = require("./services/destination-data-handler.service");
const advice_data_handler_service_1 = require("./services/advice-data-handler.service");
const book_data_handler_service_1 = require("./services/book-data-handler.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routes_1.routing,
        ],
        declarations: [
            app_component_1.AppComponent,
            advice_form_component_1.AdviceFormComponent,
            add_dest_form_component_1.AddDestFormComponent,
            art_tags_finder_component_1.ArtTagsFinderComponent,
            book_form_component_1.BookFormComponent,
            dest_preview_component_1.DestPreviewComponent,
            dest_view_component_1.DestViewComponent,
            finder_component_1.FinderComponent,
            history_tags_finder_component_1.HistoryTagsFinderComponent,
            home_component_1.HomeComponent,
            period_finder_component_1.PeriodFinderComponent,
            show_list_component_1.ShowListComponent,
            show_random_component_1.ShowRandomComponent,
        ],
        providers: [
            app_routes_1.appRoutingProviders,
            destination_data_handler_service_1.DestinationDataHandlerService,
            advice_data_handler_service_1.AdviceDataHandlerService,
            book_data_handler_service_1.BookDataHandlerService
        ],
        bootstrap: [app_component_1.AppComponent],
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
