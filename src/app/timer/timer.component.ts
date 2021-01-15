import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  public displayTime: string = "00:00";
  public action: string = "start";
  private time = 0;
  private alarm;
  private interval;

  constructor() { }

  ngOnInit(): void {
  }

  // Reset the time to zero.
  public reset(): void {
    this.time = 0
    this.displayTime = this.formatSecondsToDisplayTime(this.time);
  }

  // Depending on if time is running or not, start or stop it.
  public startOrStop(): void {
    if(this.action == "stop") {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }

  // It formats time so that it is readable.
  private formatSecondsToDisplayTime(time: number): string {
    // Stackoverflow FTW
    // If you want to also show the hours, slice argument should be 2
    return new Date(time * 1000).toISOString().substr(11, 8).slice(3);
  }

  public alarmSet(): void {
    
  }

  // Start an interval.
  private startTimer(): void {
    this.action = "stop";
    this.interval = setInterval(() => {
      this.time++;
      this.displayTime = this.formatSecondsToDisplayTime(this.time);
    },1000)
  }

  // Stop the timer lol.
  private stopTimer() {
    this.action = "start";
    clearInterval(this.interval);
  }
  

}
