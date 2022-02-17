import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, pluck } from 'rxjs/operators';
import { IUser } from '../interfaces/IUser';
import jwt_decode from 'jwt-decode';

interface ILoginUser {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  loggedIn = new BehaviorSubject<boolean>(false);
  isAdmin = new BehaviorSubject<boolean>(false);
  URL = 'https://sportio-backend.herokuapp.com/users';

  constructor(private _http: HttpClient) {}

  register(userDetails: IUser): Observable<IUser> {
    const user = this._http
      .post<IUser>(`${this.URL}/register`, userDetails, {
        withCredentials: true,
      })
      .pipe();
    return user;
  }
  login(userDetails: ILoginUser): Observable<ILoginUser> {
    const user = this._http
      .post<ILoginUser>(`${this.URL}/login`, userDetails, {
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          this.loggedIn.next(true);
        }),
        pluck('token'),
        tap((token: any) => {
          const decoded: any = jwt_decode(token);
          console.log(decoded);

          if (decoded.role === 'admin') {
            this.isAdmin.next(true);
          }
        })
      );

    return user;
  }

  logout(): Observable<string> {
    return this._http.get<string>(`${this.URL}/logout`, {
      withCredentials: true,
    });
  }

  getAllUsers(): Observable<IUser[]> {
    const users = this._http
      .get<IUser[]>(this.URL, {
        withCredentials: true,
      })
      .pipe();
    return users;
  }
}
