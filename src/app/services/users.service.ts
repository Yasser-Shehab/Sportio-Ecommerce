import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';

interface ILoginUser {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  URL = 'https://sportio-backend.herokuapp.com/users';

  constructor(private _http: HttpClient) {}

  register(userDetails: IUser): Observable<IUser> {
    const user = this._http
      .post<IUser>(`${this.URL}/register`, userDetails)
      .pipe();
    return user;
  }
  login(userDetails: ILoginUser): Observable<ILoginUser> {
    const user = this._http
      .post<ILoginUser>(`${this.URL}/login`, userDetails, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          responseType: 'text',
        }),
      })
      .pipe();
    return user;
  }
}
