
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person: Person = {
    nom: '',
    prenom: '',
    title: ''
  };
  submitted = false;
  constructor(private personService: PersonService) { }
  ngOnInit(): void {
  }
  savePerson(): void {
    const data = {
      title: this.person.title,
      nom: this.person.nom,
      prenom: this.person.prenom
    };
    this.personService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newPerson(): void {
    this.submitted = false;
    this.person = {
      title: '',
      nom: '',
      prenom: ''
    };
  }
}        
