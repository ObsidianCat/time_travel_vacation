import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import {DestPreviewComponent} from "./dest-preview.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    DestPreviewComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    DestPreviewComponent
  ]
})

export class SharedModule {}
