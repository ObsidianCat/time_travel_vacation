
import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { DestinationDataHandlerService } from "../services/destination-data-handler.service";
import { TIME_RANGE } from '../shared/constants.shared';
@Component({
  templateUrl:'vacation-chooser/templates/period-finder.component.html',
  selector: 'period-finder'
})
export class PeriodFinderComponent {

  active = true;
  submitted = false;
  @Output() gotSearchResults = new EventEmitter();

  onSubmit() {
    this.submitted = true;
    this.dataHandlerService.getDestinationsByPeriod(this.model)
      .then((data)=>{
        console.log(data);
        this.gotSearchResults.emit(data);
      })
      .catch((err)=>{
        console.error(err);
      });

  }

  model = {
    start:{
      name:"periodStart",
      date:TIME_RANGE.START
    },
    end:{
      name:"periodEnd",
      date:TIME_RANGE.END
    }
  };

  constructor(private dataHandlerService:DestinationDataHandlerService) {


  }

  get diagnostic() { return JSON.stringify(this.model); }
}
