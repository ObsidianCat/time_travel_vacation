import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Destination }    from '../models/destination';

@Component({
  selector: 'add-destination-form',
  templateUrl:'vacation-chooser/templates/add-dest-form.component.html',
  styleUrls: ['vacation-chooser/styles/forms.css']
})
export class AddDestFormComponent {
  historyTags = ["Early Middle Ages","The Renaissance", "Ancient Rome", "Ancient Greece"];
  artTags = ["Roman", "Greek and Hellenistic","Baroque", "Renaissance"];
  active = true;

  model = new Destination("Milano", "Italy", [this.historyTags[0], this.historyTags[2]]);
  submitted = false;
  onSubmit() { this.submitted = true; }

  newDestination() {
    this.model = new Destination("", "", []);
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
