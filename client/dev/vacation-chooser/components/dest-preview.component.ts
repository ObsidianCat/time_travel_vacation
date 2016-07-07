/**
 * Created by Lula on 7/7/2016.
 */
import { Component, Input  } from '@angular/core';

@Component({
  selector:'destination-preview',
  templateUrl:'vacation-chooser/templates/dest-preview.component.html',
})
export class DestPreviewComponent {
  @Input() destination: {};
  constructor() {}
}
