// authentification-service.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/User/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationServiceService {
  private baseUrl = 'http://localhost:9090/api/authentification';
  private isLoggedIn = false;

  constructor(private http: HttpClient) {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  signUp(user: User): Observable<any> {
    const signUpUrl = `${this.baseUrl}/signup`;
    return this.http.post(signUpUrl, user);
  }

  signIn(username: string): Observable<User> {
    const signInUrl = `${this.baseUrl}/signin?username=${username}`;
    return this.http.get<User>(signInUrl).pipe(
      tap(user => {
        if (user) {
          this.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(user));
          console.log(user);
        }
      })
    );
  }

  verifyEmail(token: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/verification?token=${token}`);
  }

  getLoggedInUser(): User | null {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }

  get isLoggedIn$(): boolean {
    return this.isLoggedIn;
  }
}
