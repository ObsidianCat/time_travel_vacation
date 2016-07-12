/**
 * Created by Lula on 7/3/2016.
 */
import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DestinationDataHandlerService } from "../services/destination-data-handler.service";
import { AdviceDataHandlerService } from "../services/Advice-data-handler.service";

@Component({
  selector: 'vacations-app',
  templateUrl:'vacation-chooser/templates/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers:[DestinationDataHandlerService, AdviceDataHandlerService]

})
export class AppComponent {
  name = "Time traveler";
}
