import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  
  
  constructor( private router: Router, private locate:Location){

  }
  
  ngOnInit(): void {
   
  }


  goto(event: any) {
    this.router.navigate(['homepage/carts/checkout/shipping/payment/success']);
  }


  goBack(): void {
    this.locate.back();
  }

}
