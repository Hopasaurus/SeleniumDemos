import {Component} from "@angular/core";

@Component({
  selector: 'todo',
  template: `
<pre>
TODO: SOON
- check on looking at page history. (it doesn't seem to work the way I remember)

- check with Matt on the terminology here:  (Acceptance)
- a few "acceptance tests" (non e2e and run FAST)
        -- break out the order sumarizer from order.service.ts

- tests in more languages
    -- add perl or some other tests
    -- recreate the business logic from the order.service.ts and use the same table to test both
        -- reuse the table  to showcase this ability.

- service virtualization (finish mock hookup)
    -- hook up mock service somewhere.


- three amigos script and artifacts for a live 3 amigos demos.
    - "Mockup


TODO:
- Review this list, some items may be done already or in progress.
- Login page
- Search
  - will need a list of results of the search
  - will need some things to filter the search on
  - add item to cart from search results
  - submit cart for purchase.
  - make it remember the stuff in the cart.

- hook up to a server.
- make a checkout page.
- make it use the cart calculator logic directly
    - js version 
    - and java version
    - using the same table element (fitnesse table).
- keep working towards an easier programming model for the e2e ui testing.

- Make a script table
    - link present
    - text present
    
more fixtures todo
    LinkPresent | textOfLink | RegExpMatchOfLink
TextPresent | text | 
Click_ok | xpath or css to element |
Wait_for_text_present_ok | text | timeout in ms |
Click_and_wait | xpath or css |


wait_for_text_regexp_ok | regexp | timeoutinms | optionalid |
get_text_by_id | css or xpath | varname | 
check_variable_for_regexp | regexp | variable | 


So for example:

| wait_for_text_regexp_ok | | 
| regexp | imeoutinms |
| /matt.*david/i | 30000 |

| wait_for_text_regexp_ok | | |
| regexp | imeoutinms | optionalid |
| / \\ $6\\.46$ | 30000 | id=card-total |

| get_text_by_id |
| css or xpath | varname |
|  id=card-total | v2 |

| check_variable_for_regexp | |
| regexp | varname |
 /\\$6\\.46$ | v2 |
 
 
 



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


