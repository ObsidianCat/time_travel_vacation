import { NgModule }       from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../routes/app-routing.module";
import {DestViewComponent} from "./dest-view.component";
import {BookFormComponent} from "./book-form.component";
import {AdviceFormComponent} from "./advice-form.component";


@NgModule({
  imports:  [ SharedModule, AppRoutingModule ],
  declarations:    [
    DestViewComponent,
    BookFormComponent,
    AdviceFormComponent,
  ],
})
export class DestinationFullViewModule {}
