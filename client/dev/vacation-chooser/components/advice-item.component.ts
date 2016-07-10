import { Component, Input  } from '@angular/core';

@Component({
  selector:'advice-item',
  templateUrl:'vacation-chooser/templates/advice-item.component.html',
})
export class AdviceItemComponent {
  @Input() book: {};
  constructor(

  ) {}
}
