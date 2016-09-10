/**
 * Created by Lula on 9/9/2016.
 */
import { FormsModule }    from '@angular/forms';
import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './components/app.component';
import { AddDestFormComponent } from './components/add-dest-form.component';
import { AdviceFormComponent } from './components/advice-form.component';
import { ArtTagsFinderComponent } from './components/art-tags-finder.component';
import { BookFormComponent } from './components/book-form.component';
import { DestPreviewComponent } from './components/dest-preview.component';
import { DestViewComponent } from './components/dest-view.component';
import { FinderComponent } from './components/finder.component';
import { HistoryTagsFinderComponent } from './components/history-tags-finder.component';
import { HomeComponent } from './components/home.component';
import { PeriodFinderComponent } from './components/period-finder.component';
import { ShowListComponent } from './components/show-list.component';
import { ShowRandomComponent } from './components/show-random.component';
import { HttpModule }    from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';

import { DestinationDataHandlerService } from "./services/destination-data-handler.service";
import { AdviceDataHandlerService } from "./services/advice-data-handler.service";
import { BookDataHandlerService } from "./services/book-data-handler.service";

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
