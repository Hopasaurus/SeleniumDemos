import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Get from service, also see landing page.
  title = "Hoppe's Country Store";
  searchTerm: string = '';

  constructor(private router: Router) { }

  search() {
    this.router.navigate(['/search', this.searchTerm]);
  }
}
