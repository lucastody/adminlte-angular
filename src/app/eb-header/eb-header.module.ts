import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EbHeaderComponent } from './eb-header.component';
import { EbHeaderService } from './eb-header.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EbHeaderComponent,
  ],
  exports: [
    EbHeaderComponent
  ],
  providers: [
    EbHeaderService
  ]
})
export class EbHeaderModule { }