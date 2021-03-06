import { ModuleWithProviders, NgModule, Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import {Auth} from "./auth.service";
import {NativeReferencesService} from "./native-references.service";
import {UserDataHandlerService} from "./user-data-handler.service";
import {DestinationDataHandlerService} from "./destination-data-handler.service";

@NgModule({
  imports: [ CommonModule ],
  providers: [
    Auth,
    NativeReferencesService,
    UserDataHandlerService,
    DestinationDataHandlerService
  ]
})
export class CoreModule {
}
