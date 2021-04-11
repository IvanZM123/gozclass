// Imports modules.
import { Component, OnInit } from '@angular/core';

// Imports helpers.
import { CalculateDate } from 'src/app/core/helpers/CalculateDate';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  days: string = "";
  hours: string = "";
  minutes: string = "";
  seconds: string = "";

  constructor(private calculateDate: CalculateDate) {}

  ngOnInit(): void {
    this.countdown();
  }

  private countdown(): void {
    setInterval(() => {
      const currentTime: number = new Date().getTime();
      const eventTime: number = new Date(2022, 0, 1).getTime();
      const result = this.calculateDate.calculate(currentTime, eventTime);

      this.days = this.calculateDate.addZero(result.days);
      this.hours = this.calculateDate.addZero(result.hours);
      this.minutes = this.calculateDate.addZero(result.minutes);
      this.seconds = this.calculateDate.addZero(result.seconds);
    }, 1000);
  }
}
