import {OrderDetail} from '../order/order.service';

export interface Cart {
  id: number;
  items: Array<OrderDetail>;
}
