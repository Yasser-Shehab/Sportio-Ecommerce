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
      .pipe();
    return user;
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
