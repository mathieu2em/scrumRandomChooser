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
  // The teamMember actually show in the window.
  public actualTeamMember: TeamMember;
  // If no actual team Member, show this message
  public startEndMessage: string = "click on the button above to choose a dev";
  
  public currentImage: SafeUrl = null;
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
  }

  public onChooseDev() {
    if(this.teamMembers.length>0){
      console.log(this.teamMembers.length);
      let i = Math.floor(Math.random()*this.teamMembers.length);
      this.actualTeamMember = this.teamMembers[i];
      this.currentImage = this.sanitizer.bypassSecurityTrustUrl(this.actualTeamMember.picture);
      this.teamMembers.splice(i,1);
    } else {
      this.actualTeamMember = null;
      this.startEndMessage = "No team members left!";
    }
  }

  public onGoToDevListPage(): void {
    this.router.navigate(['devList']);
  }

}
