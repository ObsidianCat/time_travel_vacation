import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent }   from './vacation-chooser/components/app.component';
import { HomeComponent }   from './vacation-chooser/components/home.component';
import { FinderComponent }   from './vacation-chooser/components/finder.component';
import { ShowListComponent }   from './vacation-chooser/components/show-list.component';
import { ShowRandomComponent }   from './vacation-chooser/components/show-random.component';
import { DestViewComponent }   from './vacation-chooser/components/dest-view.component';
import { DestPreviewComponent }   from './vacation-chooser/components/dest-preview.component';

import { AddDestFormComponent }   from './vacation-chooser/components/add-dest-form.component';
import { PeriodFinderComponent }   from './vacation-chooser/components/period-finder.component';
import { HistoryTagsFinderComponent }   from './vacation-chooser/components/history-tags-finder.component';
import { ArtTagsFinderComponent }   from './vacation-chooser/components/art-tags-finder.component';
import { UserProfileComponent }   from './vacation-chooser/components/user-profile.component';

import { BookFormComponent }   from './vacation-chooser/components/book-form.component';
import { AdviceFormComponent }   from './vacation-chooser/components/advice-form.component';
import { DestinationDataHandlerService }   from './vacation-chooser/services/destination-data-handler.service';
import { AdviceDataHandlerService }   from './vacation-chooser/services/advice-data-handler.service';
import { BookDataHandlerService }   from './vacation-chooser/services/book-data-handler.service';
import { NativeReferencesService } from './vacation-chooser/services/native-references.service';
import { UserDataHandlerService }  from './vacation-chooser/services/user-data-handler.service';
// import { Auth } from './vacation-chooser/services/auth.service';


@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot([
        { path: '',
          redirectTo: '/home',
          pathMatch: 'full'},
        { path: 'home', component: HomeComponent},
        { path: 'find', component: FinderComponent },
        { path: 'browse', component: ShowListComponent },
        { path: 'inspire', component: ShowRandomComponent },
        { path: 'destination/:id', component: DestViewComponent},
        { path: 'add-destination', component: AddDestFormComponent},
         { path: 'user-profile', component: UserProfileComponent},

      ])
    ],
   declarations: [
     AppComponent,
     HomeComponent,
     DestPreviewComponent,
     FinderComponent,
     ShowListComponent,
     ShowRandomComponent,
     DestViewComponent,
     AddDestFormComponent,
     PeriodFinderComponent,
     HistoryTagsFinderComponent,
     ArtTagsFinderComponent,
     BookFormComponent,
     AdviceFormComponent,
     UserProfileComponent,
     // Auth,
    ],
    providers: [
      AUTH_PROVIDERS,
      DestinationDataHandlerService,
      AdviceDataHandlerService,
      BookDataHandlerService,
      NativeReferencesService,
      UserDataHandlerService,
    ],
    bootstrap: [
      AppComponent,
    ],
})
export class AppModule {}
