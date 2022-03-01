
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = {
    nom: '',
    prenom: '',
    title: ''
  };
  submitted = false;
  constructor(
    private userService: UserService,
    private router: Router) { }
  ngOnInit(): void {
  }
  saveUser(): void {
    const data = {
      title: this.user.title,
      nom: this.user.nom,
      prenom: this.user.prenom
    };
    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/users']);
        },
        error => {
          console.log(error);
        });
  }
  newUser(): void {
    this.submitted = false;
    this.user = {
      title: '',
      nom: '',
      prenom: ''
    };
  }
}        
