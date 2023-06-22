import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetverificationRoutingModule } from './forgetverification-routing.module';
import { ForgetverificationComponent } from './forgetverification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ForgetverificationComponent
  ],
  imports: [
    CommonModule,
    ForgetverificationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ForgetverificationModule { }
