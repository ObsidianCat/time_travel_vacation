import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { AppComponent } from './vacation-chooser/components/app.component';

import {TodoCmp} from './todo/components/todo-cmp';
// bootstrap(AppComponent, [HTTP_PROVIDERS]);

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]);
