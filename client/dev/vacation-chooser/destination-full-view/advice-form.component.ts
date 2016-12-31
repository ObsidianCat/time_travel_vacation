/**
 * Created by Lula on 7/12/2016.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { AdviceDataHandlerService } from "./advice-data-handler.service";
import { UserDataHandlerService } from '../core/user-data-handler.service';
import { Auth } from '../core/auth.service';
@Component({
  templateUrl:'vacation-chooser/destination-full-view/advice-form.component.html',
  selector: 'advice-form',
})
export class AdviceFormComponent {
  active = true;
  submitted = false;
  @Output() newAdviceAdded = new EventEmitter();
  @Input() destId: string;
  userId: string;
  model = {};

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.userId = this.userDataHandlerService.getStoredAppUserId();

    this.dataHandlerService.saveAdvice(this.model, this.destId, this.userId)
      .then((data)=>{
        this.newAdviceAdded.emit(data);
      })
      .catch((err)=>{
        console.error(err);
      });

  }


  constructor(
    private dataHandlerService:AdviceDataHandlerService,
    private userDataHandlerService:UserDataHandlerService,
    private auth: Auth) {
  }


  get diagnostic() { return JSON.stringify(this.model); }
}
