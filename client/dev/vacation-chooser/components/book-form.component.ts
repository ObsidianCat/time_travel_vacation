/**
 * Created by Lula on 7/12/2016.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {BookDataHandlerService } from "../services/book-data-handler.service";
import { UserDataHandlerService } from '../services/user-data-handler.service';

@Component({
  templateUrl:'vacation-chooser/templates/book-form.component.html',
  selector: 'book-form',
})
export class BookFormComponent {
  submitted = false;
  @Output() newBookAdded = new EventEmitter();
  @Input() destId: string;
  model = {};
  userId: string;

  constructor(private dataHandlerService:BookDataHandlerService,
              private userDataHandlerService:UserDataHandlerService) {}

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
