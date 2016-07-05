/**
 * Created by Lula on 7/5/2016.
 */
import { provideRouter, RouterConfig } from '@angular/router';

export const routes: RouterConfig = [
  { path: 'home', component: HomeComponent },
  { path: 'choose', component: ChooserComponent },
  { path: 'browse', component: ShowListComponent },
  { path: 'inspire', component: ShowOneComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
