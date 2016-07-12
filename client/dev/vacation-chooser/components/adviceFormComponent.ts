/**
 * Created by Lula on 7/12/2016.
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { DestinationDataHandlerService } from "../services/destination-data-handler.service";

@Component({
  templateUrl:'vacation-chooser/templates/advice-form.component.html',
  selector: 'advice-form',
})
export class AdviceFormComponent {
  active = true;
  submitted = false;
  @Output() newAdviceAdded = new EventEmitter();

  onSubmit() {
    this.submitted = true;
    this.dataHandlerService.getDestinationsByTags(this.model)
      .then((data)=>{
        this.newAdviceAdded.emit(data);
      })
      .catch((err)=>{
        console.error(err);
      });

  }

  model = {
  };

  constructor(private dataHandlerService:DestinationDataHandlerService) {
  }


  get diagnostic() { return JSON.stringify(this.model); }
}
