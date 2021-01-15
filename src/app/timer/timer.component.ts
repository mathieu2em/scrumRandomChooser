import { Component, OnInit } from '@angular/core';
import { State } from './state';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

    /* global document, setInterval, clearInterval */
    public startTime = null;
    public secondsInMinute = 60;
    public secondsInHour = 60 * 60;
  
    public miliseconds=0;
    public seconds="00";
    public minutes="00";
    public action="start";
    public alarmSet;
    public minutesAlarm=0;
    public reset ;
    public alarm = null;

    public interval = null;

    public state: State;
  
  constructor() {
    this.state = new State();  
    this.reset = document.getElementById("reset");
  }

  ngOnInit(): void {
  }

  public onError(err,response): void{
    console.error(err,response);
  }

  public onAction(): void{
      if(this.interval){
          this.changeState(this.state.pause);
      } else {
          this.changeState(this.state.start);
      }
  }

  public onChangeAlarm(){
      this.alarm = this.minutesAlarm;
      console.log(this.alarm);
  }

  public onReset(): void{
      this.changeState(this.state.reset);
  }

  public changeState(st){
      switch (st) {
          case this.state.start:
              this.startTimer();
              break;
          case this.state.pause:
              this.stopTimer();
              break;
          case this.state.reset:
              this.stopTimer();
              this.resetTime();
              break;
          default:
              throw new Error("Unknown state")
      }
      this.updateActionButton();
  }

  public getString(n): string {
      if (n < 10) {
          return "0" + String(n);
      } else {
          return String(n);
      }
  }

  public setTime(m, s) {
      this.minutes = this.getString(m);
      this.seconds = this.getString(s);
      // TODO find an alternative, cuz notifier wont work here.
      // const notifier = require("node-notifier");

      if ( Number(this.minutes) == this.alarm ) {
        /*
          notifier.notify({
              message: "The time is up!",
              title: "Random Chooser Time UP !!!",
              // Special sound
              // Case Sensitive string for location of sound file, or use one of OS X's native sounds
              // Only Notification Center or Windows Toasters
              sound: true,//"Bottle",
              // The absolute path to the icon of the message
              // (doesn't work on balloons) 
              // If not found, a system icon will be shown
              icon : "C:/images/ocw-logo.png",
            // Wait with callback (onClick event of the toast), until user action is taken against notification
              wait:true
          },this.onError);
          */
          window.alert("FINISH!");
          console.log("FINISH!");
          this.onReset();
      }
  }

  public updateTime(): void {
      var diff = Math.floor((Date.now() - this.startTime) / 1000);
      var hours = Math.floor(diff / this.secondsInHour);
      diff = diff - hours * this.secondsInHour;
      var minutes = Math.floor(diff / this.secondsInMinute);
      diff = diff - minutes * this.secondsInMinute;
      var seconds = diff;

      this.setTime(minutes, seconds);
  }

  public getOffset(): number{
      var s = Number(this.seconds);
      var m = Number(this.minutes);
      var h = Number("0");
      var offset = h*this.secondsInHour + m*this.secondsInMinute + s;
      var offsetInMs = offset * 1000;
      return offsetInMs;
  }

  public getStartTime(): number {
      var offset = this.getOffset();
      var now = Date.now();
      var sTime = now - offset;
      return sTime;
  }

  public resetTime(): void {
      this.seconds = "00";
      this.minutes = "00";
  }

  public startTimer(): void {
      this.startTime = this.getStartTime();
      this.interval = setInterval(this.updateTime, 100);
      this.reset.disabled = true;
  }

  public updateActionButton(){
      if (this.interval){
          this.action = "Pause";
      } else if (this.getOffset() > 0) {
          this.action = "Continue";
      } else {
          this.action = "Start";
      }
  }

  stopTimer(){
      clearInterval(this.interval);
      this.interval = null;
      this.reset.disabled = false;
  }
}