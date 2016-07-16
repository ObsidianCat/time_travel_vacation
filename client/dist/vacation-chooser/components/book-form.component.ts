/**
 * Created by Lula on 7/12/2016.
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/forms';
import {BookDataHandlerService } from "../services/book-data-handler.service";
@Component({
  templateUrl:'vacation-chooser/templates/book-form.component.html',
  selector: 'book-form',
})
export class BookFormComponent {
  submitted = false;
  @Output() newBookAdded = new EventEmitter();
  @Input() destId: string;
  model = {};

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.dataHandlerService.saveBook(this.model, this.destId)
      .then((data)=>{
        this.newBookAdded.emit(data);
        this.model = {};
      })
      .catch((err)=>{
        console.error(err);
      });

  }


  constructor(private dataHandlerService:BookDataHandlerService) {
  }


  get diagnostic() { return JSON.stringify(this.model); }
}