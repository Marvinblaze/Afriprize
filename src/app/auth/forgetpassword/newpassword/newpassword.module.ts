import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewpasswordRoutingModule } from './newpassword-routing.module';
import { NewpasswordComponent } from './newpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewpasswordComponent
  ],
  imports: [
    CommonModule,
    NewpasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewpasswordModule { }
