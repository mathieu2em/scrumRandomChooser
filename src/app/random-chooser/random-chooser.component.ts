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

  public actualTeamMember: TeamMember = { firstName:'still no', lastName: 'dev chosen', picture:''};
  public currentImage: string = null;
  public showTimer: false;
  private teamMembers: TeamMember[];
  

  constructor(
    private router: Router,
    private readonly _tmService: TeamMembersManagerService)
  { 
    this.teamMembers = this._tmService.getTeamMembers();
  }


  ngOnInit(): void {
  }

  public onChooseDev() {
    let i = Math.floor(Math.random()*this.teamMembers.length);
    this.actualTeamMember = this.teamMembers[i];
    this.teamMembers.splice(i,1);
  }

  public onGoToDevListPage(): void {
    this.router.navigate(['devList']);
  }

}
