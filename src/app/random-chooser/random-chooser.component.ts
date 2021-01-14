import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-random-chooser',
  templateUrl: './random-chooser.component.html',
  styleUrls: ['./random-chooser.component.scss']
})
export class RandomChooserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  private onGoToDevListPage(): void {
    this.router.navigate(['devList']);
  }

  

}
