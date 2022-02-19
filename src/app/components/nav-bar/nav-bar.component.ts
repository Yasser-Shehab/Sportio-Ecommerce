import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
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
    const token = localStorage.getItem('token');
    const decoded: { role: string } = jwt_decode(token!);
    if (decoded.role === 'admin') {
      this.loggedIn = true;
      this.isAdmin = true;
    } else {
      this.loggedIn = true;
    }
  }

  logout() {
    this._usersServices.logout().subscribe(() => {
      localStorage.removeItem('token');
      this.loggedIn = false;
      this.isAdmin = false;
      this.router.navigate(['/']);
    });
  }
}
