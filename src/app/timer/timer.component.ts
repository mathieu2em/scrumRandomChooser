import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  
  public timerForm = this.formBuilder.group({
    minutes: '',
    seconds: ''
  });
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
  }
  
  // Reset the time to zero.
  public reset(): void {
    this.time = 0
    this.displayTime = this.formatSecondsToDisplayTime(this.time);
    this.stopTimer();
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
  
  // Get time from form input, then use it to set when the user should be alarmed of time ending.
  public onSubmitAlarmSet(): void {
    let time: {minutes:string, seconds:string} = this.timerForm.value;
    
    this.timerForm.setValue({minutes: (time.minutes.length==2?time.minutes:"0"+time.minutes) , seconds: (time.minutes.length==2?time.seconds:"0"+time.seconds)})

    time = this.timerForm.value;

    this.alarm = time.minutes + ":" + time.seconds;
    
    console.log(this.alarm);
  }
  
  // Start an interval.
  private startTimer(): void {
    this.action = "stop";
    this.interval = setInterval(() => {
      this.time++;
      this.displayTime = this.formatSecondsToDisplayTime(this.time);
      // Verifies if the time corresponds to the alarm set by the user.
      if(this.displayTime == this.alarm) {
        this.stopTimer();
        window.alert("TIME IS UP !!!");
      }
    },1000)
  }
  
  // Stop the timer lol.
  private stopTimer() {
    this.action = "start";
    clearInterval(this.interval);
  }
  
  
}
