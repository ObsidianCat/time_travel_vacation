/**
 * Created by Lula on 7/5/2016.
 */
import { Component } from '@angular/core';

@Component({
  templateUrl:'vacation-chooser/finder/finder.component.html',
  selector: 'finder',
})
export class FinderComponent {
  public searchType: string;
  public searchResults:{}[] = [];

  constructor() {}

  showHistoryTagsResults(data){
    console.log("got data");
    this.searchResults = data;
  }
  gotSearchResults(data){
    console.log("got data");
    this.searchResults = data;
  }
}
