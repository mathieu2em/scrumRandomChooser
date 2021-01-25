import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { config } from 'rxjs';

// ngx-countdown does not have any onTick function, which could allow us to run a functon each second.
// But it has a notify handled, which generate an event when the time left is contained in a list passed in parameter.
// To simulate a notify each second, we generate a long list of integer (here 3600) and pass it to the notify configuration.
// So, a notify event will be send each second for the last 3600 seconds left on the timer.
function range(start, end) {
  var list = [];
  for (var i = start; i <= end; i++) {
      list.push(i);
  }
  return list
}
const notifyList =  range(1,3600)

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  
  timeToSet = {hour: 0, minute: 0, second: 0};
  countdownConfig = {leftTime: 10, demand: true, notify: notifyList}
  spinnerValue = 100;

  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
  }

  setTime(){
    this.countdownConfig = 
      {
        leftTime: this.timeToSet.hour*3600 
                   + this.timeToSet.minute*60
                   + this.timeToSet.second, 
        demand: true,
        notify: notifyList}
    this.spinnerValue = 100;
  }

  onTickUpdate(event){
      // Updating the spinner value.
      this.spinnerValue =  ((event.left/1000)/this.countdownConfig.leftTime)*100;
  } 
}
