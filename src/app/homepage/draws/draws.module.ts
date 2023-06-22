import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DrawsRoutingModule } from './draws-routing.module';
import { DrawsComponent } from './draws.component';


@NgModule({
  declarations: [
    DrawsComponent
  ],
  imports: [
    CommonModule,
    DrawsRoutingModule
  ],

  providers: [
    DatePipe // Add DatePipe to the providers array
  ]

})
export class DrawsModule { }
