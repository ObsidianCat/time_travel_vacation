/**
 * Created by Lula on 7/5/2016.
 */
// import { provideRouter, RouterConfig } from '@angular/router';
"use strict";
const router_1 = require('@angular/router');
const home_component_1 = require('./components/home.component');
const show_random_component_1 = require('./components/show-random.component');
const finder_component_1 = require('./components/finder.component');
const show_list_component_1 = require('./components/show-list.component');
const dest_view_component_1 = require('./components/dest-view.component');
const add_dest_form_component_1 = require('./components/add-dest-form.component');
const appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'find', component: finder_component_1.FinderComponent },
    { path: 'browse', component: show_list_component_1.ShowListComponent },
    { path: 'inspire', component: show_random_component_1.ShowRandomComponent },
    { path: 'destination/:id', component: dest_view_component_1.DestViewComponent },
    { path: 'add-destination', component: add_dest_form_component_1.AddDestFormComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
