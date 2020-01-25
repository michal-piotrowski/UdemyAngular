import {Component} from '@angular/core';

@Component({
  templateUrl: 'warning.component.html',
  selector: 'warning',
  styles: [`
    .alert-danger {
      padding: 20px;
      font-weight: bold;
      border-radius: 4px;
    }
  `]
})
export class WarningComponent {
}
