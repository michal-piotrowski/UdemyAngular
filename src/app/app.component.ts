import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTab: string = 'recipes';

  onTabSelected(event: string) {
    this.selectedTab = event;
  }
}
