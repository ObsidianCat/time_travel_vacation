import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';

// import {TodoCmp} from './todo/components/todo-cmp';
// bootstrap(TodoCmp, [HTTP_PROVIDERS]);
import { AppComponent } from './vacation-chooser/components/app.component';
bootstrap(AppComponent, [HTTP_PROVIDERS]);
