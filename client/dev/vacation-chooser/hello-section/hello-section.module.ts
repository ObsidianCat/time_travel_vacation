import { NgModule }       from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {HelloSectionComponent} from "./hello-section.component";


@NgModule({
  imports:      [ SharedModule ],
  declarations:    [ HelloSectionComponent ],
})
export class HelloSectionModule {}
