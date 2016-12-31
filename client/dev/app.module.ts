import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule  } from '@angular/platform-browser';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent }   from './vacation-chooser/app.component';
import { HomeComponent }   from './vacation-chooser/home/home.component';
import { ShowListComponent }   from './vacation-chooser/components/show-list.component';
import { ShowRandomComponent }   from './vacation-chooser/components/show-random.component';
import { DestViewComponent }   from './vacation-chooser/components/dest-view.component';
import { DestPreviewComponent }   from './vacation-chooser/components/dest-preview.component';

// import { UserProfileComponent }   from './vacation-chooser/user-profile/user-profile.component';

import { BookFormComponent }   from './vacation-chooser/components/book-form.component';
import { AdviceFormComponent }   from './vacation-chooser/components/advice-form.component';
import { DestinationDataHandlerService }   from './vacation-chooser/services/destination-data-handler.service';
import { AdviceDataHandlerService }   from './vacation-chooser/services/advice-data-handler.service';
import { BookDataHandlerService }   from './vacation-chooser/services/book-data-handler.service';

/* Feature Modules */
import {FinderModule} from "./vacation-chooser/finder/finder.module";

import {SharedModule} from "./vacation-chooser/shared/shared.module";
import {CoreModule} from "./vacation-chooser/core/core.module";
import {UserProfileModule} from "./vacation-chooser/user-profile/user-profile.module";
import {HelloSectionModule} from "./vacation-chooser/hello-section/hello-section.module";
import {HelloSectionComponent} from "./vacation-chooser/hello-section/hello-section.component";
import {AppRoutingModule} from "./vacation-chooser/routes/app-routing.module";

@NgModule({
    imports: [
      BrowserModule,
      HttpModule,
      HelloSectionModule,
      UserProfileModule,
      FinderModule,
      SharedModule,
      CoreModule,
      AppRoutingModule,
    ],
   declarations: [
     AppComponent,
     HomeComponent,
     DestPreviewComponent,
     ShowListComponent,
     ShowRandomComponent,
     DestViewComponent,
     BookFormComponent,
     AdviceFormComponent,
     // UserProfileComponent,
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
