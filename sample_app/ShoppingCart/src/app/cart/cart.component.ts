import {Component, OnInit} from '@angular/core';
import {Item} from "../item/item";
import {Order, OrderService} from "../order/order.service";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public quickAddItem: string;
  public quickAddQty: number;

  private order: Order;


  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    // need to get the cart id from url.
    // no need to send a customer id.
    this.orderService.load(1).subscribe((cart) => {
      this.order = cart;
    });
  }

  //noinspection JSMethodCanBeStatic
  remove(item: Item) {
    console.log('Want to remove');
    console.log(item);
  }

  quickAdd() {
    console.log(`Want to add ${this.quickAddQty} of item: ${this.quickAddItem}`);
  }


}


