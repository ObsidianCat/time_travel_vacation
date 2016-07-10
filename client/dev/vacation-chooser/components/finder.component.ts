/**
 * Created by Lula on 7/5/2016.
 */
import { Component } from '@angular/core';
import {ArtTagsFinderComponent } from './art-tags-finder.component';
import { HistoryTagsFinderComponent } from './history-tags-finder.component';
import { PeriodFinderComponent } from './period-finder.component';
import {DestPreviewComponent } from './dest-preview.Component';
@Component({
  templateUrl:'vacation-chooser/templates/finder.component.html',
  selector: 'finder',
  directives:[
    HistoryTagsFinderComponent,
    ArtTagsFinderComponent,
    PeriodFinderComponent,
    DestPreviewComponent
  ]

})
export class FinderComponent {
  public searchType: String;
  public searchResults:{}[] = [];
  
  constructor() {
    
  }

  gotSearchResults(data){
    console.log(data);
    this.searchResults = data;

  }
}
