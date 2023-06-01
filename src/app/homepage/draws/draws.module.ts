import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawsRoutingModule } from './draws-routing.module';
import { DrawsComponent } from './draws.component';


@NgModule({
  declarations: [
    DrawsComponent
  ],
  imports: [
    CommonModule,
    DrawsRoutingModule
  ]
})
export class DrawsModule { }
