import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from 'src/app/shared/api/carts/cartservice.service';
import { ProductsService } from 'src/app/shared/api/products/products.service';
import { SessionService } from 'src/app/shared/storage/session.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit{


  count: number = 1;
  public allProducts:Array<any>=[];
  public grandTotal !: number;

  public deliveryFee !: number;
 public Total!: number;



 

  constructor(
    private router: Router,
    private list:ProductsService, private session: SessionService,
    private cartService : CartserviceService
    ) {}
    
    ngOnInit(): void {
      console.log(this.count)
      
      this.cartService.getProducts()
      .subscribe(res=>{
        this.allProducts = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
      
      this.deliveryFee = 10;


      this.Total = this.grandTotal + this.deliveryFee;
  }


  
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }


  getTargetedImageUrl1(): string {
    if (this.allProducts.length > 0) {
      const firstProductPictures = this.allProducts[0].pictures;
      if (firstProductPictures.length > 1) {
        const secondPicture = firstProductPictures[1];
        return secondPicture.location;
      }
    }
    return ''; // Return a default URL or an empty string if no second picture is available
  }


    
  


  // orderedlist(){
  //   this.list.listorder().subscribe((res:any) =>{
  //     this.allProducts = res.data.reverse();
  //     console.log(this.allProducts)
  //   })
  // }



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
