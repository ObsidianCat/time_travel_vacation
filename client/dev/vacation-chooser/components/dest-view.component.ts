/**
 * Created by Lula on 7/7/2016.
 */

import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationDataHandlerService } from "../services/destination-data-handler.service";


@Component({
  selector:'destination-view',
  templateUrl:'vacation-chooser/templates/dest-view.component.html',
  directives:[]

})
export class DestViewComponent implements OnInit, OnDestroy{
  @Input() destination: {};
  sub: any;

  constructor(
    private dataHandlerService: DestinationDataHandlerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.destination = {};

    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.dataHandlerService.getDestinationById(id)
        .then(destination => {
          console.log(destination);
          this.destination = destination;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}