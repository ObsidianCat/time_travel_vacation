/**
 * Created by Lula on 7/12/2016.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {BookDataHandlerService } from "./book-data-handler.service";
import { UserDataHandlerService } from '../core/user-data-handler.service';
import { Auth } from '../core/auth.service';

@Component({
  templateUrl:'vacation-chooser/destination-full-view/book-form.component.html',
  selector: 'book-form',
})
export class BookFormComponent {
  submitted = false;
  @Output() newBookAdded = new EventEmitter();
  @Input() destId: string;
  model = {};
  userId: string;

  constructor(private dataHandlerService:BookDataHandlerService,
              private userDataHandlerService:UserDataHandlerService,
              private auth: Auth) {}

  onSubmit() {
    this.userId = this.userDataHandlerService.getStoredAppUserId();

    this.submitted = true;
    console.log(this.model);
    this.dataHandlerService.saveBook(this.model, this.destId, this.userId)
      .then((data)=>{
        this.newBookAdded.emit(data);
        this.model = {};
      })
      .catch((err)=>{
        console.error(err);
      });

  }

  get diagnostic() { return JSON.stringify(this.model); }
}
