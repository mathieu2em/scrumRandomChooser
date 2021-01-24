import { Injectable } from '@angular/core';
import { TeamMember } from './TeamMember';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersManagerService {
  private teamMembers: TeamMember[] = [];

  constructor() {
    this.loadTeamMembersFromMemory();
  }

  public addMember(tm: TeamMember){
    this.teamMembers.push(tm);
    this.SaveTeamMembersToLocalStorage(this.teamMembers);
  }

  public getTeamMembers(): TeamMember[]{
    return this.teamMembers;
  }

  public setTeamMembers(tms : TeamMember[]): void {
    this.teamMembers = tms;
  }

  // Get the team members from the memory.
  private getTeamMembersFromMemory(): TeamMember[]{
    return JSON.parse(window.localStorage.getItem('TeamMembers')) || []
  }

  // Load team members from memory the assign it to global variable.
  private loadTeamMembersFromMemory(): void {
    this.teamMembers = this.getTeamMembersFromMemory();
  }

  // Save the teamMembers array to memory as a JSON.
  private SaveTeamMembersToLocalStorage(teamMembers: TeamMember[]){
    window.localStorage.setItem('TeamMembers',JSON.stringify(teamMembers));
  }
}
