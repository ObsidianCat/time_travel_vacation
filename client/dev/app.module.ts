import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormBuilder } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

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

import { BookFormComponent }   from './vacation-chooser/components/book-form.component';
import { AdviceFormComponent }   from './vacation-chooser/components/advice-form.component';
import { DestinationDataHandlerService }   from './vacation-chooser/services/destination-data-handler.service';
import { AdviceDataHandlerService }   from './vacation-chooser/services/advice-data-handler.service';
import { BookDataHandlerService }   from './vacation-chooser/services/book-data-handler.service';


@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot([
        { path: '', component: HomeComponent},
        { path: 'find', component: FinderComponent },
        { path: 'browse', component: ShowListComponent },
        { path: 'inspire', component: ShowRandomComponent },
        { path: 'destination/:id', component: DestViewComponent},
        { path: 'add-destination', component: AddDestFormComponent},
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
    ],
    providers: [
      DestinationDataHandlerService,
      AdviceDataHandlerService,
      BookDataHandlerService,
    ],
    bootstrap: [
      AppComponent,
    ],
})
export class AppModule {}
