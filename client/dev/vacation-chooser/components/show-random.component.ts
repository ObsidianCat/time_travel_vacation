/**
 * Created by Lula on 7/5/2016.
 */
import {Component, OnInit} from '@angular/core';
import { DestinationDataHandlerService } from "../services/destination-data-handler.service";


@Component({
  templateUrl:'vacation-chooser/templates/show-one.component.html',
  // directives:[DestinationDataHandlerService],

})
export class ShowRandomComponent implements OnInit {
  constructor(
    private dataHandlerService:DestinationDataHandlerService
  ){}

  destination: {};
  ngOnInit() {
    this.dataHandlerService.getData("/api/destinations?random=true")
      .then((data)=>{
        this.destination = data;
        console.log(data);
      })
      .catch((err)=>{
        console.log(err);
      });
  }
}
