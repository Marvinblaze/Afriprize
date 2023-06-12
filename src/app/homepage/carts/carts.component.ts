import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit{


  count: number = 0;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log(this.count)
    
  }


  increment() {
    this.count++;
  
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  goto(event: any) {
    this.router.navigate(['homepage/carts/checkout']);
  }

}
