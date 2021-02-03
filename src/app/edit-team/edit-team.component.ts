import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamMembersManagerService } from '../team-members-manager.service';
import { TeamMember } from '../TeamMember';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {
  private picturePlaceholderURL: string = "../../assets/images/camera-icon.svg";

  public firstName:string = '';
  public lastName:string = '';
  public picture:string = this.picturePlaceholderURL;

  public teamMembers: TeamMember[];


  constructor(private router:Router,
              private readonly _tmService: TeamMembersManagerService,
              public sanitizer: DomSanitizer) 
  { 
    this.teamMembers = _tmService.getTeamMembers();
    console.log('edit team constructor');
    console.log(this.teamMembers);
  }

  ngOnInit(): void {
  }

  public onAddingNewTeamMember(){

    // Validations
    if (this.firstName.trim() != "" || this.lastName.trim() != "" ){
      // Add the newly created member to persistent memory
      let teamMember: TeamMember = { firstName: this.firstName, lastName: this.lastName, picture: this.picture };
      this._tmService.addMember(teamMember, true);
    }

      // TODO : Display the invalid input validation in a message box.
    else {
      alert('Invalid inputs. Try again please');
    }

      // Clear the inputs
    this.onClearNewTeamMember();
  }

  private onClearNewTeamMember() {
    this.firstName = "";
    this.lastName = "";
    this.picture = this.picturePlaceholderURL;
  }

  public onGoToDevListPage(): void {
    this.router.navigate(['devList']);
  }

  public removeItem(tm: TeamMember){
    this.teamMembers.splice(this.teamMembers.indexOf(tm), 1);
    this._tmService.setTeamMembers(this.teamMembers);
    this._tmService.setActiveTeamMembers(this.teamMembers);
  }

  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];
    
    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
   var binaryString = readerEvt.target.result;
          this.picture= "data:image/jpg;charset=utf-8;base64," + btoa(binaryString);
          console.log(btoa(binaryString));
  }

}
