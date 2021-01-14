import { Component, OnInit } from '@angular/core';
const notifier = require("node-notifier");

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
