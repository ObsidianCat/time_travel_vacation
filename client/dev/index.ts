import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { AppComponent } from './vacation-chooser/components/app.component';
import { APP_ROUTER_PROVIDERS } from './vacation-chooser/app.routes';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
])
.catch(err => console.error(err));
