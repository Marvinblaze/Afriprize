import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongratulationsRoutingModule } from './congratulations-routing.module';
import { CongratulationsComponent } from './congratulations.component';


@NgModule({
  declarations: [
    CongratulationsComponent
  ],
  imports: [
    CommonModule,
    CongratulationsRoutingModule
  ]
})
export class CongratulationsModule { }
