import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss'],
})
export class SliderItemComponent implements OnInit {
  constructor() {
    for (let i = 1; i < 13; i++) {
      this.date12.push(i);
    }
  }
  today = new Date();
  x = 0;
  date12: any = [];
  ngOnInit(): void {}
  prev_month() {
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

  next_month() {
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
