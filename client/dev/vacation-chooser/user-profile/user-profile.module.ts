import { NgModule }       from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {UserProfileComponent} from "./user-profile.component";
import {AppRoutingModule} from "../routes/app-routing.module";


@NgModule({
  imports:      [ SharedModule, AppRoutingModule ],
  declarations:    [ UserProfileComponent ],
  exports: [UserProfileComponent]
})
export class UserProfileModule {}
