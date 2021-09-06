import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  disableDate = [
    { start: new Date('2021-09-01'), end: new Date('2021-09-05') },
  ];
}
