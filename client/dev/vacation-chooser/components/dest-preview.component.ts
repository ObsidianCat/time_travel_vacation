/**
 * Created by Lula on 7/7/2016.
 */
import { Component, Input  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector:'destination-preview'+Math.random(),
  styleUrls: ['vacation-chooser/styles/css/components/dest-preview.component.css'],
  templateUrl:'vacation-chooser/templates/dest-preview.component.html',
})
export class DestPreviewComponent {
  // @Input() destination: {};
  @Input('cur-destination') destination: any;

  constructor(
    private router: Router
  ) {}

  goToDestView(id){
    let link = ['/destination', id];
    this.router.navigate(link);
  }
}
