import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrHelpRoutingModule } from './pr-help-routing.module';
import { PrHelpComponent } from './pr-help.component';


@NgModule({
  declarations: [
    PrHelpComponent
  ],
  imports: [
    CommonModule,
    PrHelpRoutingModule
  ]
})
export class PrHelpModule { }
