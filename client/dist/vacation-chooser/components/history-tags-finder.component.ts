import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {HISTORY_TAGS } from '../shared/constants.shared'
import { DestinationDataHandlerService } from "../services/destination-data-handler.service";

@Component({
  templateUrl:'vacation-chooser/templates/tags-finder.component.html',
  selector: 'history-tags-finder',
})
export class HistoryTagsFinderComponent {

  active = true;
  submitted = false;
  @Output() gotSearchResults = new EventEmitter();

  onSubmit() {
    this.submitted = true;
    let selectedTags = this.model["tags"].filter(this.isSelected);
    this.model["selectedTags"] = (function(){
      let tagsNames = [];
      for(let tag of selectedTags){
        tagsNames.push(tag.name);
      }
      return tagsNames;
    })();
    // console.log(this.model);
    this.dataHandlerService.getDestinationsByTags(this.model)
      .then((data)=>{
        console.log(data);
        this.gotSearchResults.emit(data);
      })
      .catch((err)=>{
        console.error(err);
      });

  }

  model = {
    tagsType:"historyTags"
  };

  constructor(private dataHandlerService:DestinationDataHandlerService) {

    var tagsList = (function(tags){
      var tagsCollection = [];
      for(let tag of tags){
        tagsCollection.push({
          "name":tag,
          "isChecked":false
        });
      }//end of for of
      return tagsCollection;
    })(HISTORY_TAGS);

    this.model["tags"] = tagsList;
  }

  isSelected(value) {
    return value.isChecked;
  }
  get diagnostic() { return JSON.stringify(this.model); }
}
