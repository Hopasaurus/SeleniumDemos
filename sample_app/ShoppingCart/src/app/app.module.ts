import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {CartComponent} from './cart/cart.component';
import {ItemService} from './item/item.service';
import {SearchResultsComponent} from './search/search-results.component';
import {OrderService} from './order/order.service';
import {LandingPageComponent} from "./landing-page/landing-page.component";

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LandingPageComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'search/:term',
        component: SearchResultsComponent,
      },
      {
        path: 'search',
        component: SearchResultsComponent,
      },
      {
        path: '',
        component: LandingPageComponent,
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [
    ItemService,
    OrderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
