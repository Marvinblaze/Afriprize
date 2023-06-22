import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartdaraService {

  private cartItems: { price: number, quantity: number }[] = [];

  updateCartItems(items: { price: number; quantity: number }[]) {
    this.cartItems = items;
  }

  getCartItems() {
    return this.cartItems;
  }

  constructor() { }
}
