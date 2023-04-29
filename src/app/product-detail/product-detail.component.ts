import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../models";
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";
import {UserService} from "../user.service";
import {CartComponent} from "../cart/cart.component";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  product!: Product

  constructor(private productService: ProductService, private route: ActivatedRoute, private cartComponent: CartComponent,
              private cartService: CartService) {

  }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    // @ts-ignore
    const product_id = Number(routeParams.get('product_id'));
    this.productService.getProduct(product_id).subscribe((data:Product)=>{
      this.product = data;
    })
    console.log(product_id)
  }

  addToCart(product_id: number){
    this.cartService.addToCart(product_id).subscribe((data: any) =>{
      this.cartComponent.products.push(data)
    })
  }

  // addToCart() {
  //   const productId = this.product.id;
  //   const user_id = this.userService.isAuthorized ? this.userService.user_id : 0;
  //   this.cartService.addToCart(productId, user_id).subscribe(data => {
  //     // Handle the response from the server
  //     console.log(data);
  //   });
  // }



}
