/**
 * Created by Lula on 7/12/2016.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { AdviceDataHandlerService } from "../services/advice-data-handler.service";
import { Advice } from "../models/advice";
@Component({
  templateUrl:'vacation-chooser/templates/advice-form.component.html',
  selector: 'advice-form',
})
export class AdviceFormComponent {
  active = true;
  submitted = false;
  @Output() newAdviceAdded = new EventEmitter();
  @Input() destId: string;
  @Input() userId: string;

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    // this.dataHandlerService.saveAdvice(this.model, this.destId, this.userId)
    //   .then((data)=>{
    //     console.log(data);
    //     // this.newAdviceAdded.emit(data);
    //   })
    //   .catch((err)=>{
    //     console.error(err);
    //   });

  }

  model = new Advice("", "");

  constructor(private dataHandlerService:AdviceDataHandlerService) {
  }


  get diagnostic() { return JSON.stringify(this.model); }
}
