import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit{




  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    
  }

  goto(event: any) {
    this.router.navigate(['homepage/carts/checkout']);
  }

}