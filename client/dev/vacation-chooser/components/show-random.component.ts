/**
 * Created by Lula on 7/5/2016.
 */
import {Component, OnInit} from '@angular/core';
import { DestinationDataHandlerService } from "../services/destination-data-handler.service";
import { DestPreviewComponent } from './dest-preview.component';
import { DESTINATION_URLS } from '../shared/constants.shared';


@Component({
  selector:'destination-random',
  templateUrl:'vacation-chooser/templates/show-random.component.html',
  directives:[DestPreviewComponent],

})
export class ShowRandomComponent implements OnInit {
  constructor(
    private dataHandlerService:DestinationDataHandlerService
  ){}
  randomDest: {};
  ngOnInit() {
    this.randomDest = {};
    this.dataHandlerService.getData(DESTINATION_URLS.RANDOM_DESTINATION)
      .then((data)=>{
        this.randomDest = data;
        console.log(this.randomDest);
      })
      .catch((err)=>{
        console.error(err);
      });
  }
}