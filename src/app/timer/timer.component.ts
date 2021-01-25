import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { config } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  
  timeToSet = {hour: 0, minute: 0, second: 0};
  salut = {leftTime: 10, demand: true}
  spinnerValue = 100;

  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
  }

  setTime(){
    this.salut = 
      {
        leftTime: this.timeToSet.hour*3600 
                   + this.timeToSet.minute*60
                   + this.timeToSet.second, 
        demand: true}
    this.spinnerValue = 100;
  }

 
  
  
}
