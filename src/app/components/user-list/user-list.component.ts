import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users?: User[];
  currentUser: User = {};
  currentIndex = -1;
  title = '';
  constructor(private UserService: UserService) { }
  ngOnInit(): void {
    this.retrieveUsers();
  }
  retrieveUsers(): void {
    this.UserService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveUsers();
    this.currentUser = {};
    this.currentIndex = -1;
  }
  setActiveUser(tutorial: User, index: number): void {
    this.currentUser = tutorial;
    this.currentIndex = index;
  }
  removeAllUsers(): void {
    this.UserService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
  searchTitle(): void {
    this.currentUser = {};
    this.currentIndex = -1;
    this.UserService.findByTitle(this.title)
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
