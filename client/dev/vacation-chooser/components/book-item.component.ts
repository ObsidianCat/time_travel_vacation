/**
 * Created by Lula on 7/7/2016.
 */
import { Component, Input  } from '@angular/core';

@Component({
  selector:'book-item',
  templateUrl:'vacation-chooser/templates/book-item.component.html',
})
export class BookItemComponent {
  @Input() book: {};
  constructor(

  ) {}
}
