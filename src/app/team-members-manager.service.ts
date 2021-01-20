import { Injectable } from '@angular/core';
import { TeamMember } from './TeamMember';

@Injectable({
  providedIn: 'root'
})
export class TeamMembersManagerService {
  private TeamMembers: TeamMember[] = [];

  constructor() { }

  public addMember(tm: TeamMember){
    this.TeamMembers.push(tm);
  }

  public getTeamMembers(): TeamMember[]{
    return this.TeamMembers;
  }

  public setTeamMembers(tms : TeamMember[]): void {
    this.TeamMembers = tms;
  }
}
