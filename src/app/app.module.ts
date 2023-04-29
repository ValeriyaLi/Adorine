import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./AuthInterseptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WpSliderComponent } from './wp-slider/wp-slider.component';
import { WpAboutComponent } from './wp-about/wp-about.component';
import { WpWhyComponent } from './wp-why/wp-why.component';
import { WpIdeaComponent } from './wp-idea/wp-idea.component';
import { WpComponent } from './wp/wp.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AbotpageComponent } from './abotpage/abotpage.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PaymentComponent } from './payment/payment.component';
import { CarryComponent } from './carry/carry.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    WpSliderComponent,
    WpAboutComponent,
    WpWhyComponent,
    WpIdeaComponent,
    WpComponent,
    CategoriesComponent,
    UserhomeComponent,
    CartComponent,
    ProductComponent,
    ProductDetailComponent,
    WpSliderComponent,
    AbotpageComponent,
    DeliveryComponent,
    PaymentComponent,
    CarryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: '', component: WpComponent},
        {path: 'registration', component: RegistrationComponent},
        {path: 'login', component: LoginComponent},
        {path: 'categories', component: CategoriesComponent},
        {path: 'user-home', component: UserhomeComponent},
        {path: 'cart', component: CartComponent},
        {path: 'about', component: AbotpageComponent},
        {path: 'delivery', component: DeliveryComponent},
        {path: 'payment', component: PaymentComponent},
        {path: 'carry', component: CarryComponent},
        {path: 'categories/:category_id', component: ProductComponent},
        {path: 'products/:product_id', component: ProductDetailComponent},
      ]
    ),

    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
