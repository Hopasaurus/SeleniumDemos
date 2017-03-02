import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {ItemService} from "../item/item.service";
import {Item} from "../item/item";

@Injectable()
export class OrderService {
  constructor(private itemService: ItemService) { }

  load(id: number): Observable<Order> {
    let order = OrderService.orders.find(o => o.id === id);
    order.detail = OrderService.orderLines.filter(ol => ol.orderId === id);
    order.summaryDetail = this.summarizeDetail(order.detail);

    return Observable.forkJoin(
      order.summaryDetail.map(detail => this.itemService.load(detail.itemId).do(item => detail.item = item))
    ).map(() => order).do(order => order.total = order.summaryDetail.reduce((a, d) => a + (d.item ? d.item.price : 0), 0));
  }

  summarizeDetail(detail: Array<OrderDetail>) {
    return detail.reduce((summaryDetail, detail) => {
      let summarizedDetail = summaryDetail.find(sd => sd.itemId === detail.itemId);

      if (summarizedDetail) {
        summarizedDetail.quantity += detail.quantity;
      } else {
        summaryDetail.push(detail);
      }

      return summaryDetail;
    }, []).filter(sd => sd.quantity > 0);
  }

  //noinspection JSMethodCanBeStatic,JSUnusedGlobalSymbols
  addOrderDetail(orderDetail: OrderDetail) {
    //  would send this via http
    console.log('want to add a new order detail:');
    console.log(orderDetail);
  }
  private static orders: Array<Order> = [
    { id: 1, po: 'Test Order number 1', detail: [], summaryDetail: [], total: 0 }
  ];

  private static orderLines: Array<OrderDetail> = [
    { id: 1, orderId: 1, itemId: 1, quantity: 1 } as OrderDetail,
    { id: 2, orderId: 1, itemId: 2, quantity: 10 } as OrderDetail,
    { id: 3, orderId: 1, itemId: 1, quantity: -1 } as OrderDetail,
    { id: 4, orderId: 1, itemId: 3, quantity: 3 } as OrderDetail,
  ];
}

export class Order {
  public id: number;
  public po: string;
  public detail: Array<OrderDetail>;
  public summaryDetail: Array<OrderDetail>;
  public total: number;
}

export class OrderDetail {
  public id: number;
  public orderId: number;
  public quantity: number;
  public itemId: number;
  public item: Item;

  // Not needed for demo:
  // time stamp
  // whodunit
}
