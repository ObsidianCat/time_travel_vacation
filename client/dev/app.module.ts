/**
 * Created by Lula on 9/9/2016.
 */
import { FormsModule }    from '@angular/forms';
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './vacation-chooser/components/app.component';
import { AddDestFormComponent } from './vacation-chooser/components/add-dest-form.component';
import { AdviceFormComponent } from './vacation-chooser/components/advice-form.component';
import { ArtTagsFinderComponent } from './vacation-chooser/components/art-tags-finder.component';
import { BookFormComponent } from './vacation-chooser/components/book-form.component';
import { DestPreviewComponent } from './vacation-chooser/components/dest-preview.component';
import { DestViewComponent } from './vacation-chooser/components/dest-view.component';
import { FinderComponent } from './vacation-chooser/components/finder.component';
import { HistoryTagsFinderComponent } from './vacation-chooser/components/history-tags-finder.component';
import { HomeComponent } from './vacation-chooser/components/home.component';
import { PeriodFinderComponent } from './vacation-chooser/components/period-finder.component';
import { ShowListComponent } from './vacation-chooser/components/show-list.component';
import { ShowRandomComponent } from './vacation-chooser/components/show-random.component';
import { HttpModule }    from '@angular/http';
import { routing, appRoutingProviders } from './vacation-chooser/app.routes';

import { DestinationDataHandlerService } from "./vacation-chooser/services/destination-data-handler.service";
import { AdviceDataHandlerService } from "./vacation-chooser/services/advice-data-handler.service";
import { BookDataHandlerService } from "./vacation-chooser/services/book-data-handler.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  declarations: [
    AppComponent,
    AdviceFormComponent,
    AddDestFormComponent,
    ArtTagsFinderComponent,
    BookFormComponent,
    DestPreviewComponent,
    DestViewComponent,
    FinderComponent,
    HistoryTagsFinderComponent,
    HomeComponent,
    PeriodFinderComponent,
    ShowListComponent,
    ShowRandomComponent,
  ],
  providers:[
    appRoutingProviders,
    DestinationDataHandlerService,
    AdviceDataHandlerService,
    BookDataHandlerService
  ],
  bootstrap:    [AppComponent],
})
export class AppModule {}
