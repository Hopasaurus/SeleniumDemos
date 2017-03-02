import {Component} from "@angular/core";

@Component({
  selector: 'landing-page',
  template: `
Welcome to {{storeName}}
`,
})
export class LandingPageComponent {
  // TODO: load from a service  also get the name for the nav bar from service.
  storeName = 'Excelon Development General Store';
}


