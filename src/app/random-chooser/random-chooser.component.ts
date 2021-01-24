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
  // The teamMember actually show in the window.
  public actualTeamMember: TeamMember;
  // If no actual team Member, show this message
  public readonly: string = "click on the button above to choose a dev";
  
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
    if(this.teamMembers.length>0){
      let i = Math.floor(Math.random()*this.teamMembers.length);
      this.actualTeamMember = this.teamMembers[i];
      this.teamMembers.splice(i,1);
    } else {
      this.actualTeamMember = { firstName: 'No team members left!', lastName: '', picture: '' };
    }
  }

  public onGoToDevListPage(): void {
    this.router.navigate(['devList']);
  }

}
