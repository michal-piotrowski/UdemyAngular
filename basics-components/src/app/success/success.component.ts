import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styles: [`
    .alert-success {
      padding: 20px;
      font-weight: bold;
      border-radius: 4px;
    }
  `]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
