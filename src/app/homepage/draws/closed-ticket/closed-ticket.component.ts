import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-closed-ticket',
  templateUrl: './closed-ticket.component.html',
  styleUrls: ['./closed-ticket.component.css']
})
export class ClosedTicketComponent implements OnInit {






  userobject: string | any;
  country: string | any
  

  profileobject: any;

  
  
  constructor( private route:Router, private location: Location){}
 
  
  ngOnInit(): void {

  }



  goBack(): void {
    this.location.back();
  }


}
