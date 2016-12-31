import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule  } from '@angular/platform-browser';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent }   from './vacation-chooser/app.component';
import { HomeComponent }   from './vacation-chooser/home/home.component';


import { DestinationDataHandlerService }   from './vacation-chooser/core/destination-data-handler.service';
import { AdviceDataHandlerService }   from './vacation-chooser/destination-full-view/advice-data-handler.service';
import { BookDataHandlerService }   from './vacation-chooser/destination-full-view/book-data-handler.service';

/* Feature Modules */
import {FinderModule} from "./vacation-chooser/finder/finder.module";
import {SharedModule} from "./vacation-chooser/shared/shared.module";
import {CoreModule} from "./vacation-chooser/core/core.module";
import {UserProfileModule} from "./vacation-chooser/user-profile/user-profile.module";
import {AppRoutingModule} from "./vacation-chooser/routes/app-routing.module";
import {DestinationFullViewModule} from "./vacation-chooser/destination-full-view/destination-full-view.module";
import {ShowRandomComponent} from "./vacation-chooser/shared/show-random.component";
import {ShowListComponent} from "./vacation-chooser/shared/show-list.component";

@NgModule({
    imports: [
      BrowserModule,
      HttpModule,
      UserProfileModule,
      FinderModule,
      DestinationFullViewModule,
      SharedModule,
      CoreModule,
      AppRoutingModule,
    ],
   declarations: [
     AppComponent,
     HomeComponent,
     ShowListComponent,
     ShowRandomComponent
    ],
    providers: [
      AUTH_PROVIDERS,
      DestinationDataHandlerService,
      AdviceDataHandlerService,
      BookDataHandlerService,
    ],
    bootstrap: [
      AppComponent,
    ],
})
export class AppModule {}
