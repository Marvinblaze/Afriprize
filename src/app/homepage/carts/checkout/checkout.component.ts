import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/shared/api/carts/cartservice.service';
import { ProductsService } from 'src/app/shared/api/products/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  count: number = 0;
  
  constructor( private router: Router, private productsService:ProductsService,private cartservice: CartserviceService){

  }
  
  public totalItem : number = 1;

  public grandTotal !: number;

  public deliveryFee !: number;
 public Total!: number;
  public products:Array<any>=[];
  // products = [
  //   { id: 'b9a14913-0b7e-4b0c-8c93-921f815bc496', quantity: 2 },
  //   { id: 'fad9d98f-a074-48ea-8377-1d13ed6ffd1b', quantity: 2 }
  // ];


  ngOnInit(): void {
    console.log(this.count)


    this.cartservice.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.totalItem = res.length;
      this.grandTotal = this.cartservice.getTotalPrice();
    })
    
    this.deliveryFee = 10;


    this.Total = this.grandTotal + this.deliveryFee;
    
    
    this.productsService.saveOrder(this.products).subscribe(
      (data) => {
        console.log(data);
        // Handle the response as needed
      },
      (error) => {
        console.error('An error occurred while saving the order:', error);
        // Handle the error appropriately (e.g., display an error message)
      }
    );

  }



  getTargetedImageUrl1(): string {
    if (this.products.length > 0) {
      const firstProductPictures = this.products[0].pictures;
      if (firstProductPictures.length > 1) {
        const secondPicture = firstProductPictures[1];
        return secondPicture.location;
      }
    }
    return ''; // Return a default URL or an empty string if no second picture is available
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
    this.router.navigate(['homepage/carts/checkout/shipping']);
  }
}
