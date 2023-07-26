import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface ISessionUser {
  loggedIn : boolean;
  username: string;
  isActive: boolean;
  userType: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {

  url = 'api/auth/register'

  headers = new HttpHeaders({});

  constructor(private http: HttpClient) { }


  // returns user observable
  register(payload: any): Observable<any> {
    return this.http.post<ISessionUser>(this.url, this.headers, payload);
  }
}
