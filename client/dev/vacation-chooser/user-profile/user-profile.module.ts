import { NgModule }       from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {UserProfileComponent} from "./user-profile.component";


@NgModule({
  imports:      [ SharedModule ],
  declarations:    [ UserProfileComponent ],
  exports: [UserProfileComponent]
})
export class UserProfileModule {}
