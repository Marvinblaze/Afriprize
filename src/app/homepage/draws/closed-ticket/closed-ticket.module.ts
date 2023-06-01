import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosedTicketRoutingModule } from './closed-ticket-routing.module';
import { ClosedTicketComponent } from './closed-ticket.component';


@NgModule({
  declarations: [
    ClosedTicketComponent
  ],
  imports: [
    CommonModule,
    ClosedTicketRoutingModule
  ]
})
export class ClosedTicketModule { }
