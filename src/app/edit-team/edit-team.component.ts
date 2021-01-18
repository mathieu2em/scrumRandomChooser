import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Todo {
  firstname: string;
  lastname: string;
  picture: string;
}

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit {
  firstname = '';
  lastname = '';

  public todo: Todo[] = [
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

public done: Todo[] = [
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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onAddingNewTeamMember(){

      // Validations
    if (this.firstname.trim() != "" || this.lastname.trim() != "" ){
      this.todo.push({ firstname: this.firstname, lastname: this.lastname, picture: "" });
    }

      // TODO : Display the invalid input validation in a message box.
    else {
      alert('Invalid inputs. Try again please');
    }

      // Clear the inputs
    this.onClearNewTeamMember();
  }

  onClearNewTeamMember() {
    this.firstname = "";
    this.lastname = "";
  }

  public onGoToDevListPage(): void {
    this.router.navigate(['devList']);
  }
}
