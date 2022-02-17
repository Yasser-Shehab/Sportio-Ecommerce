import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  loggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private _usersServices: UsersService, private router: Router) {}

  ngOnInit(): void {
    this._usersServices.loggedIn.subscribe((val) => {
      console.log(val);
      this.loggedIn = val;
    });
    this._usersServices.isAdmin.subscribe((val) => {
      console.log(val);
      this.isAdmin = val;
    });
  }

  logout() {
    this._usersServices.logout().subscribe(() => {
      localStorage.removeItem('token');
      this.loggedIn = false;
      this.router.navigate(['/']);
    });
  }
}
