/**
 * Created by Lula on 7/7/2016.
 */
import { Component, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector:'destination-preview',
  styleUrls: ['vacation-chooser/styles/css/components/dest-preview.component.css'],
  templateUrl:'vacation-chooser/templates/dest-preview.component.html',
  directives: [ROUTER_DIRECTIVES],
})
export class DestPreviewComponent {
  @Input() destination: {};
  constructor(
    private router: Router
  ) {}

  goToDestView(id){
    let link = ['/destination', id];
    this.router.navigate(link);
  }
}
