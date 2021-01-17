import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public onGoToDevListPage(): void {
    this.router.navigate(['devList']);
  }
}
