// authentification-service.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/User/user';

interface SignInResponse {
  success: boolean;
  user?: User;
}


@Injectable({
  providedIn: 'root'
})
export class AuthentificationServiceService {
  private baseUrl = 'http://localhost:9090/api/authentification';
  private isLoggedIn = false;

  constructor(private http: HttpClient) {
    // Initialisez l'état de connexion à partir du stockage local lors du chargement du service
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  signUp(user: User): Observable<any> {
    const signUpUrl = `${this.baseUrl}/signup`;
    return this.http.post(signUpUrl, user);
  }

  signIn(email: string): Observable<SignInResponse> {
    const signInUrl = `${this.baseUrl}/signin?email=${email}`;
    return this.http.get<SignInResponse>(signInUrl).pipe(
      tap(response => {
        if (response.success && response.user) {
          this.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(response.user));
          console.log(response.user);
        }
      })
    );
  }

  verifyEmail(token: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/verification?token=${token}`);
  }

  // Ajoutez une méthode pour obtenir l'utilisateur actuellement connecté
  getLoggedInUser(): User | null {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

  // Ajoutez une méthode pour déconnecter l'utilisateur
  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }

  // Ajoutez une propriété pour vérifier l'état de connexion
  get isLoggedIn$(): boolean {
    return this.isLoggedIn;
  }
}
