import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamMembersManagerService } from '../team-members-manager.service';
import { TeamMember } from '../TeamMember';

@Component({
  selector: 'app-random-chooser',
  templateUrl: './random-chooser.component.html',
  styleUrls: ['./random-chooser.component.scss']
})
export class RandomChooserComponent implements OnInit {

  teamMembers: TeamMember[];

  constructor(
    private router: Router,
    private readonly _tmService: TeamMembersManagerService) { 
      this.teamMembers = _tmService.getTeamMembers();
    }

  ngOnInit(): void {
  }

  public onGoToDevListPage(): void {
    this.router.navigate(['devList']);
  }

}
