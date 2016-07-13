/**
 * Created by Lula on 7/7/2016.
 */

import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationDataHandlerService } from "../services/destination-data-handler.service";
import { DestinationModel } from "../models/destination";
import { AdviceFormComponent } from "./advice-form.component";
import { BookFormComponent } from "./book-form.component";

@Component({
  selector:'destination-view',
  templateUrl:'vacation-chooser/templates/dest-view.component.html',
  directives:[AdviceFormComponent, BookFormComponent]
})
export class DestViewComponent implements OnInit, OnDestroy{
  @Input() destination: DestinationModel;
  sub: any;

  constructor(
    private dataHandlerService: DestinationDataHandlerService,
    private route: ActivatedRoute
  ) {
    this.destination = new DestinationModel("","", [],[],[],[]);

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.dataHandlerService.getDestinationById(id)
        .then(destination => {
          Object.assign(this.destination, destination);
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  newAdviceAdded(advice){
    this.destination.advices.push(advice.data);
  }

  newBookAdded(book){
    this.destination.books.push(book.data);
    console.log(this.destination);
  }
}
