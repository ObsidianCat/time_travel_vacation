import {NgModule} from "@angular/core";
import {PeriodFinderComponent} from "./period-finder.component";
import {HistoryTagsFinderComponent} from "./history-tags-finder.component";
import {ArtTagsFinderComponent} from "./art-tags-finder.component";
import {FinderComponent} from "./finder.component";
import {SharedModule} from "../shared/shared.module";
import { RouterModule }   from '@angular/router';

@NgModule({
  imports:[SharedModule, RouterModule],

  declarations: [
    ArtTagsFinderComponent,
    FinderComponent,
    HistoryTagsFinderComponent,
    PeriodFinderComponent
  ],
})

export class FinderModule {}
