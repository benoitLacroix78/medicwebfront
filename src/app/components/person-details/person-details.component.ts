import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  currentPerson: Person = {
    title: '',
    nom: '',
    prenom : ''
  };
  message = '';
  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPerson(this.route.snapshot.params['id']);
  }

  getPerson(id: string): void {
    this.personService.get(id)
      .subscribe(
        data => {
          this.currentPerson = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  /*updatePublished(status: boolean): void {
    const data = {
      title: this.currentPerson.title,
      nom: this.currentPerson.nom,
      published: status
    };
    this.message = '';
    this.personService.update(this.currentPerson.id, data)
      .subscribe(
        response => {
          this.currentPerson.prenom = status;
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }*/
  updateTutorial(): void {
    this.message = '';
    this.personService.update(this.currentPerson.id, this.currentPerson)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  deleteTutorial(): void {
    this.personService.delete(this.currentPerson.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/persons']);
        },
        error => {
          console.log(error);
        });
  }
}
