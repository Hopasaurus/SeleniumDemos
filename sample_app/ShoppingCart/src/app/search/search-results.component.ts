import {Component, OnInit} from '@angular/core';
import {ItemService} from '../item/item.service';
import {Item} from '../item/item';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'search-result',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public items: Array<Item> = [];
  private unfiltered_items: Array<Item> = [];

  public searchTerm: string;
  public loading = true;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private itemService: ItemService) {

    this.itemService = itemService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.switchMap((params: Params) => {
      this.searchTerm = params['term'];
      this.loading = true;
      return this.itemService.loadAll().delay(500);
    })
      .subscribe((items) => {
      this.unfiltered_items = items;
      this.applySearchFilter();
    });
  }

  add(item: Item) {
    // TODO: figure out how to send this to the cart.  probably call a cart add service.
    console.log('Want to add an item to the cart:');
    console.log(item);
    this.router.navigate(['/cart']);
  }

  // This is a pretty naive filter.... failing tests can look for differences in capitalization or two search terms.
  applySearchFilter() {
    this.loading = false;
    this.items = this.unfiltered_items.filter(item => !this.searchTerm || item.description.includes(this.searchTerm));
  }
}
