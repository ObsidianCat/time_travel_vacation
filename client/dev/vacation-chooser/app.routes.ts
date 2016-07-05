/**
 * Created by Lula on 7/5/2016.
 */
import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent }  from './components/home.component';
import { ShowOneComponent }  from './components/show-one.component';
import { FinderComponent }  from './components/finder.component';
import { ShowListComponent }  from './components/show-list.component';


export const routes: RouterConfig = [
  {path: '', component: HomeComponent},
  // { path: 'home', component: HomeComponent },
  { path: 'find', component: FinderComponent },
  { path: 'browse', component: ShowListComponent },
  { path: 'inspire', component: ShowOneComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
