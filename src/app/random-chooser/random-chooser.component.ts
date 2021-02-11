import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TeamMembersManagerService } from '../team-members-manager.service';
import { TeamMember } from '../TeamMember';

@Component({
  selector: 'app-random-chooser',
  templateUrl: './random-chooser.component.html',
  styleUrls: ['./random-chooser.component.scss']
})
export class RandomChooserComponent implements OnInit {

  // The teamMember actually shown in the window.
  public actualTeamMember: TeamMember;

  // If no team registered, show this message
  public noTeamMessage: string = "No team!\nManage your teams.";

  // If no actual team Member, show this message
  public startMessage: string = "Spin for a dev!";
  
  // If true : show the dev picture --- If false : show the placeholder
  public isDevSelected: boolean = false;

  // True is a there's a team registered/selected
  public existsTeam: boolean = false;

  public showTimer: false;
  public teamMembers: TeamMember[];
  
  constructor(
    private router: Router,
    private readonly _tmService: TeamMembersManagerService,
    public sanitizer: DomSanitizer)
  { 
    this.teamMembers = [...this._tmService.getActiveTeamMembers()];
    console.log(this.teamMembers);
  }


  ngOnInit(): void {
    this.existsTeam = this.teamMembers.length > 0;
  }

  public onChooseDev() {
    if(this.teamMembers.length>0){
      console.log(this.teamMembers.length);
      let i = Math.floor(Math.random()*this.teamMembers.length);
      this.actualTeamMember = this.teamMembers[i];
      this.teamMembers.splice(i,1);
      this.isDevSelected = true;
    } else {
      this.actualTeamMember = null;
      this.isDevSelected = false;
    }
  }

  public onGoToDevListPage(): void {
    this.router.navigate(['devList']);
  }
}
