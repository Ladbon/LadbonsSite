import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioProject';
  acceleratevideo = false;

  scrollTopTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
