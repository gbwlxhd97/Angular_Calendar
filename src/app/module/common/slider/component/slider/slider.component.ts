import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  constructor() {
    for (let i = 1; i < 13; i++) {
      let data = this.date12.push('◎' + i);
      this.roundI = data;
    }
  }
  roundI: any;
  today = new Date();
  x = -0;
  click = false;
  date12: any = [];
  sun: any;
  sat: any;
  targetDate: any;
  dates: any = []; //일자
  ngOnInit(): void {}

  clickRound() {
    this.x = 0;
  }

  prev_slide() {
    if (this.x >= 0) {
      this.x = this.x + 80;
    }
    if (this.x <= 0) {
      this.x += 80;
    }
    if (this.x == 80) {
      this.x = -880;
    }
    if (this.x == -880) {
      this.x = -880;
    }
    console.log(this.x);
  }

  next_slide() {
    if (this.x <= 0) {
      this.x = this.x - 80;
    }
    if (this.x >= 0) {
      this.x -= 80;
    }

    if (this.x == -960) {
      this.x = 0;
    }
    console.log(this.x);
  }
}
