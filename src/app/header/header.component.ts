import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
  collapsed: boolean = true;

  @Output()
  tabSelected = new EventEmitter<string>();

  onSelected(feature: string) {
    this.tabSelected.emit(feature);
  }
}
