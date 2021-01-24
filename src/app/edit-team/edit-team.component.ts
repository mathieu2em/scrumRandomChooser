import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamMembersManagerService } from '../team-members-manager.service';
import { TeamMember } from '../TeamMember';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {
  firstName = '';
  lastName = '';

  public teamMembers: TeamMember[];

  constructor(private router:Router,
              private readonly _tmService: TeamMembersManagerService) 
  { 
    this.teamMembers = _tmService.getTeamMembers();
  }

  ngOnInit(): void {
  }

  onAddingNewTeamMember(){

    // Validations
    if (this.firstName.trim() != "" || this.lastName.trim() != "" ){
      // Add the newly created member to persistent memory
      let teamMember: TeamMember = { firstName: this.firstName, lastName: this.lastName, picture: "" };
      this._tmService.addMember(teamMember, true);
    }

      // TODO : Display the invalid input validation in a message box.
    else {
      alert('Invalid inputs. Try again please');
    }

      // Clear the inputs
    this.onClearNewTeamMember();
  }

  onClearNewTeamMember() {
    this.firstName = "";
    this.lastName = "";
  }

  public onGoToDevListPage(): void {
    this.router.navigate(['devList']);
  }
}
