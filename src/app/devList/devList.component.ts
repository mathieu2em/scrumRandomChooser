  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import {
    CdkDragDrop,
    moveItemInArray,
    transferArrayItem
  } from '@angular/cdk/drag-drop';
  import { TeamMember } from '../TeamMember';

  @Component({
    selector: 'app-devList',
    templateUrl: './devList.component.html',
    styleUrls: ['./devList.component.scss']
  })
  export class DevListComponent implements OnInit {
    value = "";


  public todo: TeamMember[] = [
      {
        "firstname": "Alexandre",
        "lastname": "Chartrand",
        "picture": ""
      },
      {
        "firstname": "Mathieu",
        "lastname": "Perron",
        "picture": ""
      },
      {
        "firstname": "Élodie",
        "lastname": "Bérubé",
        "picture": ""
      }
    ];

  public done: TeamMember[] = [
    {
      "firstname": "Bob",
      "lastname": "Terrier",
      "picture": ""
    },
    {
      "firstname": "Mathieu",
      "lastname": "Olivier",
      "picture": ""
    },
    {
      "firstname": "Fabian",
      "lastname": "Charest",
      "picture": ""
    }
    ];


  constructor(private router:Router) {}

  ngOnInit() {}

  /*
  onSubmit() {
      this.todo.push({ title: this.value, date: new Date().toString() });
      this.value = '';
    }
  */

  clearInput(event: MouseEvent) {
      if ((<HTMLElement>event.target).nodeName === 'MAT-ICON') {
        this.value = '';
      }
    }

  deleteTask(index: number) {
      this.done.splice(index, 1);
    }

  onAreaListControlChanged(index: number) {
      setTimeout(() => {
        const task = this.todo.splice(index, 1);
        this.done.unshift(task[0]);
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