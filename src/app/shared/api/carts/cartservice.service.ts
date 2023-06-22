import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//TODO: CREATE TYPE
// type Product ={
//   id: string

// }

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }


  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();

    console.log(this.cartItemList)
  }

  
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }


  removeCartItem(product: any){


    this.cartItemList.splice(product,1);
   

    this.productList.next(this.cartItemList);
  
}
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
