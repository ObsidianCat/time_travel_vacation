"use strict";var __decorate=this&&this.__decorate||function(e,o,n,t){var r,a=arguments.length,c=a<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,o,n,t);else for(var _=e.length-1;_>=0;_--)(r=e[_])&&(c=(a<3?r(c):a>3?r(o,n,c):r(o,n))||c);return a>3&&c&&Object.defineProperty(o,n,c),c},__metadata=this&&this.__metadata||function(e,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,o)},core_1=require("@angular/core"),http_1=require("@angular/http"),forms_1=require("@angular/forms"),platform_browser_1=require("@angular/platform-browser"),router_1=require("@angular/router"),angular2_jwt_1=require("angular2-jwt"),app_component_1=require("./vacation-chooser/components/app.component"),home_component_1=require("./vacation-chooser/components/home.component"),finder_component_1=require("./vacation-chooser/components/finder.component"),show_list_component_1=require("./vacation-chooser/components/show-list.component"),show_random_component_1=require("./vacation-chooser/components/show-random.component"),dest_view_component_1=require("./vacation-chooser/components/dest-view.component"),dest_preview_component_1=require("./vacation-chooser/components/dest-preview.component"),add_dest_form_component_1=require("./vacation-chooser/components/add-dest-form.component"),period_finder_component_1=require("./vacation-chooser/components/period-finder.component"),history_tags_finder_component_1=require("./vacation-chooser/components/history-tags-finder.component"),art_tags_finder_component_1=require("./vacation-chooser/components/art-tags-finder.component"),user_profile_component_1=require("./vacation-chooser/components/user-profile.component"),book_form_component_1=require("./vacation-chooser/components/book-form.component"),advice_form_component_1=require("./vacation-chooser/components/advice-form.component"),destination_data_handler_service_1=require("./vacation-chooser/services/destination-data-handler.service"),advice_data_handler_service_1=require("./vacation-chooser/services/advice-data-handler.service"),book_data_handler_service_1=require("./vacation-chooser/services/book-data-handler.service"),native_references_service_1=require("./vacation-chooser/services/native-references.service"),user_data_handler_service_1=require("./vacation-chooser/services/user-data-handler.service"),AppModule=function(){function e(){}return e=__decorate([core_1.NgModule({imports:[platform_browser_1.BrowserModule,forms_1.FormsModule,http_1.HttpModule,router_1.RouterModule.forRoot([{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:home_component_1.HomeComponent},{path:"find",component:finder_component_1.FinderComponent},{path:"browse",component:show_list_component_1.ShowListComponent},{path:"inspire",component:show_random_component_1.ShowRandomComponent},{path:"destination/:id",component:dest_view_component_1.DestViewComponent},{path:"add-destination",component:add_dest_form_component_1.AddDestFormComponent},{path:"user-profile",component:user_profile_component_1.UserProfileComponent}])],declarations:[app_component_1.AppComponent,home_component_1.HomeComponent,dest_preview_component_1.DestPreviewComponent,finder_component_1.FinderComponent,show_list_component_1.ShowListComponent,show_random_component_1.ShowRandomComponent,dest_view_component_1.DestViewComponent,add_dest_form_component_1.AddDestFormComponent,period_finder_component_1.PeriodFinderComponent,history_tags_finder_component_1.HistoryTagsFinderComponent,art_tags_finder_component_1.ArtTagsFinderComponent,book_form_component_1.BookFormComponent,advice_form_component_1.AdviceFormComponent,user_profile_component_1.UserProfileComponent],providers:[angular2_jwt_1.AUTH_PROVIDERS,destination_data_handler_service_1.DestinationDataHandlerService,advice_data_handler_service_1.AdviceDataHandlerService,book_data_handler_service_1.BookDataHandlerService,native_references_service_1.NativeReferencesService,user_data_handler_service_1.UserDataHandlerService],bootstrap:[app_component_1.AppComponent]}),__metadata("design:paramtypes",[])],e)}();exports.AppModule=AppModule;