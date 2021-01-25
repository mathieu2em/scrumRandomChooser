import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { config } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  
  time = {minute: 0, second: 0};
  salut = {leftTime: 5, demand: true}

  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
  }

  setTime(){
    this.salut.leftTime = this.time.minute*60+this.time.second
  }
  
  
}
