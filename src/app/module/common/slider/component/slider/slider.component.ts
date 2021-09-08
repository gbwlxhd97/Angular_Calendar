import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  constructor() {
    for (let i = 1; i < 5; i++) {
      this.date4.push(i);

      // this.roundI = [...data];
    }
  }
  roundI: any;
  x = 0;
  widX = 80;
  active: any;
  date4: any = [];
  roundIndex: any;
  ngOnInit(): void {
    // this.roundfindIndex();
  }

  roundfindIndex() {
    // console.log(this.date12.map((e: any, index: any) => index + 1));
    // this.roundIndex = this.date12.map((e: any, index: any) => index + 1);
    if (this.date4[0]) {
      this.x = 0;
    }
    if (this.date4[1]) {
      this.x = -this.widX;
    }
    if (this.date4[2]) {
      this.x = -this.widX * 2;
    }
    // if (this.date4[3]) {
    //   this.x = -this.widX * 3;
    // }
  }

  clickRound() {
    this.x = -80;
  }

  prev_slide() {
    if (this.x >= 0) {
      this.x = this.x + 80;
    }
    if (this.x <= 0) {
      this.x += 80;
    }
    if (this.x == 80) {
      this.x = -240;
    }
    if (this.x == -240) {
      this.x = -240;
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

    if (this.x == -320) {
      this.x = 0;
    }
    console.log(this.x);
  }
}
