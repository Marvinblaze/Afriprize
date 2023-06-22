import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from 'src/app/shared/api/carts/cartservice.service';
import { ProductsService } from 'src/app/shared/api/products/products.service';
import { CartdaraService } from 'src/app/shared/cartdara.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cartItems: { price: number; quantity: number }[] = [];
  count: any = 0;

  constructor(
    private cartdara: CartdaraService,
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService,
    private cartservice: CartserviceService
  ) {}

  public totalItem: number = 1;

  public grandTotal!: number;
  public grandTotal1!: number;

  public deliveryFee!: number;
  public Total!: number;
  public products: Array<any> = [];
  // products = [
  //   { id: 'b9a14913-0b7e-4b0c-8c93-921f815bc496', quantity: 2 },
  //   { id: 'fad9d98f-a074-48ea-8377-1d13ed6ffd1b', quantity: 2 }
  // ];

  quantity: number | any;
  price: number | any;
  
      cartItemsString = localStorage.getItem('cartItems');
    public grandTotalString = localStorage.getItem('quantity');

  ngOnInit(): void {

 

    this.count = this.grandTotalString ? JSON.parse(this.grandTotalString): '';
  this.grandTotal1 =this.cartItemsString ? JSON.parse(this.cartItemsString): '';

  console.log(this.quantity)
  
  // if (cartItemsString && grandTotalString) {
  //   this.cartItems = JSON.parse(cartItemsString);
  //   this.grandTotal = JSON.parse(grandTotalString);
  // }


    // this.route.queryParams.subscribe(params => {
    //   this.grandTotal = params['grandTotal'] || 0;
    // });


    console.log(this.grandTotal)

    

    this.cartservice.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.updateCart();
      // this.grandTotal = this.cartService.getTotalPrice();
    })
    
    this.deliveryFee = 10;

    // this.cartservice.getProducts().subscribe((res) => {
    //   this.products = res;
    //   this.totalItem = res.length;
    //   this.grandTotal = this.cartservice.getTotalPrice();
    // });

    // this.deliveryFee = 10;

    this.Total = this.grandTotal1 + this.deliveryFee;

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


// updatequantity(){

// }
// if (grandTotalString: any) {
//   const parsedCartItems = JSON.parse(grandTotalString);
//   this.count = parsedCartItems;
// }


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

  increment(index: number) {
    this.count[index]++;
    this.cartItems[index].quantity++;
    this.updateTotalPrice();
  }




  decrement(index: number) {

    if (this.count > 0) {
      this.count--;
    }
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.updateTotalPrice();
    }
  }

 

  goto(event: any) {
    this.router.navigate(['homepage/carts/checkout/shipping']);
  }





  updateCart() {
    this.cartItems = this.products.map(product => {
      return { price: product.product_price, quantity: 1 };
    });
    this.updateTotalPrice();
}

updateTotalPrice() {
  this.grandTotal = this.cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  this.Total = this.grandTotal + this.deliveryFee;
}







removeItem(item: any){
  this.cartservice.removeCartItem(item);
}
emptycart(){
  this.cartservice.removeAllCart();
}
}
