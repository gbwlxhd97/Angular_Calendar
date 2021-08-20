import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor() {
    this.renderDate(new Date());
    for (let i = 1990; i < 2030; i++) {
      this.yearArr.push(i);
    }
    for (let i = 1; i < 13; i++) {
      this.monthArr.push(i);
    }
    for (let i = 1; i < 13; i++) {
      this.date12.push(i);
    }
  }
  today = new Date();
  realtoday = this.today.getDate();
  year = this.today.getFullYear();
  month = this.today.getMonth();
  YM = this.year + '년' + (this.month + 1) + '월';
  first_date = new Date(this.year, this.month, 1).getDate(); //이번달 첫째날
  last_day: any = new Date(this.year, this.month + 1, 0).getDate(); //이번달 마지막날
  first_day = new Date(this.year, this.month, 1).getDay(); //오늘의 요일
  sun: any;
  sat: any;
  targetDate: any;
  dates: any = []; //일자
  todayCome: any;
  click2 = false;
  selectClick: any;
  activeSelect = false;
  activeToday = false;
  selectYear: any;
  selectMonth: any;
  yearArr: any = [];
  monthArr: any = [];
  date12: any = [];
  hiddenSelect: any;
  x = -this.today.getMonth() * 300;
  ngOnInit(): void {}
  toDate(date: Date) {
    //값초기화
    date.setMilliseconds(0);
    date.setMinutes(0);
    date.setHours(0);
  }
  /* 
    setDate는 월의 일을 수정 ex -> n월1일 2일 ..
    setMonth는 월을 수정 -> 1월n일 2월 n일 ...
    getDay는 요일을 반환
    getDate는 일을 반환
  */
  selectDate() {
    //년도 월 선택하는 함수
    const date = new Date(`${this.selectYear}-${this.selectMonth}`);
    this.renderDate(date);
    this.activeSelect = false;
  }
  todayDate() {
    //올해 이번달로 돌아가는 함수
    const today_date = new Date();
    today_date.getFullYear();
    today_date.getMonth();
    this.renderDate(today_date);
  }
  // renderDate가 호출이되면 dates멤버변수가 변경됨.
  renderDate(n: Date) {
    const next = new Date(n);
    this.toDate(next);
    this.targetDate = next;
    const start = new Date(n); // 결국 이값은 오늘날의 날짜의 정보를 가져옴
    this.toDate(start); //start는 해당하는 달 시 분 초를 가져옴 다만 값은 모두 0으로 가져옴
    this.sun = start.getDay();
    start.setDate(1); //start를 일을 1일로 설정

    start.setDate(-start.getDay() + 1); //1일과 일요일 체크 start.getDay() === 0이다 즉 -0 + 1 을 해줘야 0값인 일요일을 확인할 수 있음

    const end = new Date(n);
    this.toDate(end);
    end.setMonth(end.getMonth() + 1); //월을 수정해서 +1값을해줬으니 해당하는 월 의 +1값 ex -> 8월이면 9월로출력
    end.setDate(0); // 해당하는 달의 마지막 일 출력 ex -> 8월이면 8월31일값

    end.setDate(end.getDate() + (6 - end.getDay())); //6과 토요일 체크  즉.다음달 달력에 출력하는 요일들 값 즉.현재의 end는 8월31일을 뜻함. end.getDay()는 8월31일 화요일 == 2의 요일을 반환 end.getDate()는 8월 31일인 31일값
    this.sat = end.getDay();

    const setday = []; // render함수안에 일자
    for (let i = 0; 1; i++) {
      // console.log(this.targetDate.getDate());
      const v = new Date(start); //해당하는 달 1일을 v값에 넣어줌

      v.setDate(v.getDate() + i);
      if (v.getTime() > end.getTime()) {
        break;
      }
      setday.push(v);
      // console.log(v.getDate()); //v는 1일부터 다음달 달력에찍히는 날까지.
    }

    this.dates = setday;
  }

  prev_month() {
    let prev = this.targetDate;
    this.toDate(prev);
    prev.setMonth(prev.getMonth() - 1);
    this.renderDate(prev);

    if (this.x <= 0) {
      this.x = this.x + 300;
    }

    if (this.x === 0) {
      this.x = -3600;
      this.x += 300;
    }
    console.log(this.x);
  }

  next_month() {
    let next = this.targetDate;
    this.toDate(next);
    next.setMonth(next.getMonth() + 1);
    this.renderDate(next);
    if (this.x != -3900) {
      if (this.x <= 0) {
        this.x = this.x - 300;
      }
      if (this.x === -3600) {
        this.x = 0;
        this.x -= 300;
      }
    }
    console.log(this.x);
  }
}
