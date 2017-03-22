import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Rx';
import {Item} from './item';

@Injectable()
export class ItemService {
  constructor (private http: Http) { }

  //noinspection JSUnusedGlobalSymbols
  public load(id: number): Observable<Item> {
    // return this.http.get('http://localhost:1080/items')
    //   .map((response: Response) => {
    //     let body = response.json();
    //     return body.data || { };
    //   });

    return Observable.of(ItemService.items.find(item => item.id === id));
  }

  public loadAll(): Observable<Array<Item>> {
    return Observable.of(ItemService.items);
  }

  private static items: Array<Item> = [
    {id: 1, description: 'Pop', price: 1.23},
    {id: 2, description: 'Soda', price: 2.23},
    {id: 3, description: 'Muffins', price: 4.23},
    {id: 4, description: 'Pancakes', price: 5.33},
    {id: 5, description: 'Waffles', price: 6.42},
    {id: 6, description: 'Potato', price: 7.52},
    {id: 7, description: 'Hash brown', price: 8.64},
    {id: 8, description: 'Corn', price: 9.76},
    {id: 9, description: 'Beets', price: 7.88},
    {id: 10, description: 'Turnips', price: 6.67},
    {id: 11, description: 'YellowBerries', price: 5.56},
    {id: 12, description: 'Greenberries', price: 4.45},
    {id: 13, description: 'Blueberries', price: 3.33},
    {id: 14, description: 'StrawBerries', price: 2.21},
    {id: 15, description: 'Wheat Bread', price: 4.92},
    {id: 16, description: 'Rye Bread', price: 5.83},
    {id: 17, description: 'White Bread', price: 6.24},
  ];
}

