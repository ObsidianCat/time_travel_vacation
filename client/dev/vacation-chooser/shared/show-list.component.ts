/**
 * Created by Lula on 7/5/2016.
 */
import {Component, OnInit} from '@angular/core';
import { DestinationDataHandlerService } from "../core/destination-data-handler.service";

@Component({
  selector:'destination-preview',
  templateUrl:'vacation-chooser/shared/show-list.component.html',
  styleUrls: ['vacation-chooser/styles/css/components/show-list.component.css'],

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
