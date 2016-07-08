/**
 * Created by Lula on 7/5/2016.
 */
import { Component } from '@angular/core';
import {ArtTagsFinderComponent } from './art-tags-finder.component';
import { HistoryTagsFinderComponent } from './history-tags-finder.component';
import { PeriodFinderComponent } from './period-finder.component';

@Component({
  templateUrl:'vacation-chooser/templates/finder.component.html',
  selector: 'finder',
  directives:[HistoryTagsFinderComponent, ArtTagsFinderComponent, PeriodFinderComponent, ]

})
export class FinderComponent {
  public searchType: String;
  constructor(
  ) {}
}
