import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpasswordRoutingModule } from './cpassword-routing.module';
import { CpasswordComponent } from './cpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CpasswordComponent
  ],
  imports: [
    CommonModule,
    CpasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CpasswordModule { }
