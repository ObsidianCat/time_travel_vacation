import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {ART_TAGS } from '../shared/constants.shared'

@Component({
  templateUrl:'vacation-chooser/templates/art-tags-finder.component.html',
  selector: 'art-tags-finder',
})
export class ArtTagsFinderComponent {
  active = true;
  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }
  onCheckboxChange(ev){
    console.log(ev);
  }
  // tags: string[];
  model = {
  };

  constructor() {

    var tagsList = (function(tags){
      var tagsCollection = [];
      for(let tag of tags){
        tagsCollection.push({
          "name":tag,
          "isChecked":false
        });
      }//end of for of
      return tagsCollection;
    })(ART_TAGS);

    this.model["tags"] = tagsList;
  }

  get diagnostic() { return JSON.stringify(this.model); }
}
