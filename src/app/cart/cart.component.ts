import {Component, Injectable, OnInit} from '@angular/core';
import { CartService } from '../cart.service';
import {Category, Product} from "../models";
import {UserService} from "../user.service";
import {ProductService} from "../product.service";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  products!: Product[];
  price: number = 0;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.getCartProducts().subscribe((prods: any) => {
      this.products = prods;
    });
  }


  // deleteFromCart(productId: number): void {
  //   // Remove the product with the given ID from the cart service
  //   this.cartService.deleteFromCart().subscribe(() => {
  //     // Remove the product with the given ID from the local ids array
  //     this.ids = this.ids.filter(id => id !== productId);
  //   });
  // }
}
