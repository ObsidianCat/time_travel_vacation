/**
 * Created by Lula on 7/5/2016.
 */
// import { provideRouter, RouterConfig } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent }  from './components/home.component';
import { ShowRandomComponent }  from './components/show-random.component';
import { FinderComponent }  from './components/finder.component';
import { ShowListComponent }  from './components/show-list.component';
import { DestViewComponent }  from './components/dest-view.component';
import { AddDestFormComponent }  from './components/add-dest-form.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'find', component: FinderComponent },
  { path: 'browse', component: ShowListComponent },
  { path: 'inspire', component: ShowRandomComponent },
  { path: 'destination/:id', component: DestViewComponent},
  { path: 'add-destination', component: AddDestFormComponent},
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
