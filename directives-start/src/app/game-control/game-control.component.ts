import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  numberEmitter: EventEmitter<number> = new EventEmitter<number>();
  timerReference;
  numberReference = 0;
  gameStarted = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  startEmitting() {
    this.gameStarted = true;
    this.timerReference = setInterval(() => {
      this.numberEmitter.emit(this.numberReference++);
    }, 1000);
  }

  pauseEmitting() {
    this.gameStarted = false;
    clearInterval(this.timerReference);
  }
}
