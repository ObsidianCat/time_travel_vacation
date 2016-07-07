/**
 * Created by Lula on 7/5/2016.
 */
import {Component, OnInit} from '@angular/core';
import { DestinationDataHandlerService } from "../services/destination-data-handler.service";
import { DestPreviewComponent } from './dest-preview.component';
import { DESTINATION_URLS } from '../shared/constants.shared';

@Component({
  selector:'destination-preview',
  templateUrl:'vacation-chooser/templates/show-list.component.html',
  directives:[DestPreviewComponent]
})
export class ShowListComponent implements OnInit {
  constructor(
    private dataHandlerService:DestinationDataHandlerService
  ){}
  destList: any[];
  ngOnInit() {
    this.destList = [];
    this.dataHandlerService.getData(DESTINATION_URLS.ALL_DESTINATIONS)
      .then((data)=>{
        this.destList = data;
        // console.log(this.randomDest);
        console.log(data);

      })
      .catch((err)=>{
        console.error(err);
      });
  }
}
