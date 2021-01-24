import { Injectable } from '@angular/core';
import { TeamMember } from './TeamMember';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersManagerService {
  // List of all the users.
  private teamMembers: TeamMember[] = [];
  // List of the users we want to randomly choose in random chooser.
  // BTM no need for an inactive list as the active one makes the other deductible.
  private activeTeamMembers: TeamMember[] = [];

  // Key to active team members list in localStorage.
  private readonly ACTIVE_TM_TAG: string = 'activeTeamMembers';
  // Key to team members list in localStorage.
  private readonly TM_TAG: string = 'teamMembers';


  constructor() {
    this.loadTeamMembersFromMemory();
  }

  public addMember(tm: TeamMember, active: boolean){
    this.teamMembers.push(tm);
    this.activeTeamMembers.push(tm);
    this.SaveTeamMembersToLocalStorage(this.teamMembers, this.activeTeamMembers);
  }

  public removeMember(tm: TeamMember): void{
    const indexInTeam: number = this.teamMembers.findIndex((item) => {return tm == item;})
    this.teamMembers.splice(indexInTeam);
    let indexInActiveTeam: number = -1;
    if(indexInTeam){
      indexInActiveTeam = this.activeTeamMembers.findIndex((item) => {return tm == item;})
      if(indexInActiveTeam>0) this.activeTeamMembers.splice(indexInActiveTeam);
    }
  }

  public getTeamMembers(): TeamMember[]{
    return this.teamMembers;
  }

  public getActiveTeamMembers(): TeamMember[]{
    return this.activeTeamMembers;
  }

  public setTeamMembers(tms : TeamMember[]): void {
    this.teamMembers = tms;
    this.SaveTeamMembersToLocalStorage(this.teamMembers, this.activeTeamMembers);
  }

  public setActiveTeamMembers(atms: TeamMember[]){
    this.activeTeamMembers = atms;
    this.SaveTeamMembersToLocalStorage(this.teamMembers, this.activeTeamMembers);
  }

  // Get a teamMember list from memory.
  private getElementFromMemoryAsJson(element: string): TeamMember[]{
    return JSON.parse(window.localStorage.getItem(element)) || [];
  }

  // Load team members from memory the assign it to global variable.
  private loadTeamMembersFromMemory(): void {
    this.teamMembers = this.getElementFromMemoryAsJson('teamMembers');
    this.activeTeamMembers = this.getElementFromMemoryAsJson('activeTeamMembers')
  }

  // Save the teamMembers array to memory as a JSON.
  private SaveTeamMembersToLocalStorage(teamMembers: TeamMember[], activeTeamMembers: TeamMember[]){
    window.localStorage.setItem('teamMembers',JSON.stringify(teamMembers));
    window.localStorage.setItem('activeTeamMembers', JSON.stringify(activeTeamMembers));
  }
}
