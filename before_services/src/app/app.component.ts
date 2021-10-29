import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  path: string = 'recipes';
  value: number = 14;
  setActiveRoute(path: string) {
    this.path = path;
  }
}
