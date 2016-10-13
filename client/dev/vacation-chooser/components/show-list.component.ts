/**
 * Created by Lula on 7/5/2016.
 */
import {Component, OnInit} from '@angular/core';
import { DestinationDataHandlerService } from "../services/destination-data-handler.service";

@Component({
  selector:'destination-preview',
  templateUrl:'vacation-chooser/templates/show-list.component.html',
})
export class ShowListComponent implements OnInit {
  constructor(
    private dataHandlerService:DestinationDataHandlerService
){}
  destList: any[];
  ngOnInit() {
    this.destList = [];
    this.dataHandlerService.getAllDestinations()
      .then((data)=>{
        this.destList = data;
        console.log(data);

      })
      .catch((err)=>{
        console.error(err);
      });
  }
}
