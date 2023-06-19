import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrHelpRoutingModule } from './pr-help-routing.module';
import { PrHelpComponent } from './pr-help.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrHelpComponent
  ],
  imports: [
    CommonModule,
    PrHelpRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrHelpModule { }
