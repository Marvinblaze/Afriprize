import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartserviceService } from 'src/app/shared/api/carts/cartservice.service';
import { ProductsService } from 'src/app/shared/api/products/products.service';
import { SessionService } from 'src/app/shared/storage/session.service';
import { CartdaraService } from 'src/app/shared/cartdara.service';





@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})





export class CartsComponent implements OnInit{


  count: number = 1;
  public allProducts:Array<any>=[];
  public grandTotal : number = 0;

  public deliveryFee : number =10 ;
 public Total: number = 0;





 public cartItems: { price: number, quantity: number }[] = [];


 Items: {[id: string]:number} = {}






  constructor(
    private router: Router,
    private list:ProductsService, private session: SessionService,
    private cartService : CartserviceService,
    private cartdara: CartdaraService,
  
    ) {}
    
    ngOnInit(): void {


      
      
      this.cartService.getProducts()
      .subscribe(res=>{
        this.allProducts = res;
        this.updateCart();


        
  // localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        // this.grandTotal = this.cartService.getTotalPrice();
      })
      
      this.deliveryFee = 10;
      
      this.InitializeItems()
      


      // this.Total = this.grandTotal + this.deliveryFee;
  }




  updateCart() {

    this.cartItems =[];


    this.allProducts.forEach(product => {
      this.cartItems.push({
        price: product.product_price,
        quantity:1
      });
    });
    // this.cartItems = this.allProducts.map(product => {
    //   return { price: product.product_price, quantity: 1 };
    // });
    this.updateTotalPrice();

    
}


  
  removeItem(item: any, id: string){
    this.cartItems[item].quantity = 0;
   
    // this.Items = this.Items.filter(obj => return obj !== foo_object);
    this.cartService.removeCartItem(item);
    // console.log(this.cartService.removeCartItem(item))
    delete this.Items[id];
    this.updateTotalPrice();
    
  }

  emptycart(){
    this.cartService.removeAllCart();
    this.Items = {}
  }


  getTargetedImageUrl1(): string {
    if (this.allProducts.length > 0) {
      const firstProductPictures = this.allProducts[0].pictures;
      if (firstProductPictures.length > 1) {
        const secondPicture = firstProductPictures[1];
        return secondPicture.location;
      }
    }
    return '';
  }






  
  updateTotalPrice() {
    this.grandTotal = this.cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    this.Total = this.grandTotal + this.deliveryFee;

    
  localStorage.setItem('cartItems', JSON.stringify(this.grandTotal));
  localStorage.setItem('quantity', JSON.stringify(this.cartItems));
  }





  increment(index: number, id: string) {
    // this.count++;
    this.Items[id]++
    this.cartItems[index].quantity++;
    this.updateTotalPrice();
  }

  decrement(index: number, id: string) {

    if (this.Items[id] > 0) {
      this.Items[id]--;
    }
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
      this.updateTotalPrice();
    }
  }


  goto(event: any) {
    this.router.navigate(['homepage/carts/checkout']);
  }


  // addCart(quantity: number, price: number) {
  //   this.carts.push({ quantity, price });
  //   this.calculateSubtotal();
  // }


  InitializeItems(){
    
    for (let product of this.allProducts){
      this.Items[product.id] = 1;
    } 
  }




}
