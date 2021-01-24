  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import {
    CdkDragDrop,
    moveItemInArray,
    transferArrayItem
  } from '@angular/cdk/drag-drop';
  import { TeamMember } from '../TeamMember';
import { TeamMembersManagerService } from '../team-members-manager.service';

  @Component({
    selector: 'app-devList',
    templateUrl: './devList.component.html',
    styleUrls: ['./devList.component.scss']
  })
  export class DevListComponent implements OnInit {
    value = "";

    public activeTeamMembers: TeamMember[] = [];
    public inactiveTeamMembers: TeamMember[] = [];

  constructor(
    private router:Router,
    private readonly _tmService: TeamMembersManagerService) {
    this.activeTeamMembers = this._tmService.getTeamMembers();
    console.log(this.activeTeamMembers);
  }

  ngOnInit() {}

  clearInput(event: MouseEvent) {
      if ((<HTMLElement>event.target).nodeName === 'MAT-ICON') {
        this.value = '';
      }
    }

  deleteTask(index: number) {
      this.inactiveTeamMembers.splice(index, 1);
  }

  onAreaListControlChanged(index: number) {
      setTimeout(() => {
        const task = this.activeTeamMembers.splice(index, 1);
        this.inactiveTeamMembers.unshift(task[0]);
      }, 1000);
    }

    public onGoToEditYourTeamPage(): void {
      this.router.navigate(['editTeam']);
    }

    public onGoToRandomChooserPage(): void {
      this.router.navigate(['']);
    }

    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
    }
  }