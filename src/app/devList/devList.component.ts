import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

export interface Todo {
  title: string;
  date: string;
}
@Component({
  selector: 'app-devList',
  templateUrl: './devList.component.html',
  styleUrls: ['./devList.component.scss']
})
export class DevListComponent implements OnInit {
  value = '';

public todo: Todo[] = [
    { title: 'Wake up', date: new Date().toString() },
    { title: 'Shopping', date: new Date().toString() },
  ];

public done: Todo[] = [
    { title: 'Write a blog', date: new Date().toString() },
    { title: 'Study Electron', date: new Date().toString() }
  ];

arr = [];


constructor(private router:Router) {}

ngOnInit() {}

onSubmit() {
    this.todo.push({ title: this.value, date: new Date().toString() });
    this.value = '';
  }

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

drop(event: CdkDragDrop<string[]>, type: string) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    } else {
      if (type === 'todo') {
        moveItemInArray(this.todo, event.previousIndex, event.currentIndex)
      } else {
        moveItemInArray(this.done, event.previousIndex, event.currentIndex);
      }
    }
  }
}