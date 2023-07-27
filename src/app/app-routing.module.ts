import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ShopComponent } from './views/shop/shop.component';
import { FaqComponent } from './views/faq/faq.component';
import { CartComponent } from './views/cart/cart.component';
import { FavoriteComponent } from './views/favorite/favorite.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'productDetail', component: ProductDetailComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo:  '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
