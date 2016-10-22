/**
 * Created by Lula on 7/3/2016.
 */
import {Component} from '@angular/core';
import { Auth } from '../services/auth.service';

@Component({
  selector: 'vacations-app',
  templateUrl:'vacation-chooser/templates/app.component.html',
  providers: [ Auth ],

})
export class AppComponent {
  constructor(private auth: Auth) {}
  name = "Time traveler";
}
