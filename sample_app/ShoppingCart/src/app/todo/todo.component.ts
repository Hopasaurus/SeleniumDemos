import {Component} from "@angular/core";

@Component({
  selector: 'todo',
  template: `
<pre>
TODO:
- Review this list, some items may be done already or in progress.
- Login page
- Search
  - will need a list of results of the search
  - will need some things to filter the search on
  - add item to cart from search results
  - submit cart for purchase.
  - make it remember the stuff in the cart.

  - load and save cart to mock service.
  - mock out the interactions to/from server
  - control mocks from the test

- add md?
- mobile?
- sauce labs integration
- icon for the cart
</pre>
`,
})
export class TodoComponent {
}


