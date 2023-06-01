import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrnotificationsRoutingModule } from './prnotifications-routing.module';
import { PrnotificationsComponent } from './prnotifications.component';


@NgModule({
  declarations: [
    PrnotificationsComponent
  ],
  imports: [
    CommonModule,
    PrnotificationsRoutingModule
  ]
})
export class PrnotificationsModule { }
