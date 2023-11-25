// connexion.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User/user';
import { AuthentificationServiceService } from '../services/authentification/authentification-service.service';

interface SignInResponse {
  success: boolean;
  message?: string;
}

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  formData: User = new User('', ''); // Initialisez avec un nouvel utilisateur

  constructor(private router: Router, private authService: AuthentificationServiceService) {}

  onSubmit() {
    this.authService.signIn(this.formData.email).subscribe(
      (response: SignInResponse) => {
        if (response.success) {
          this.router.navigate(['/themes-list']);
        } else {
          console.error('Erreur de connexion :', response.message);
        }
      },
      error => {
        console.error('Une erreur s\'est produite lors de la connexion :', error);
      }
    );
  }

  redirigerVersThemes() {
    // Redirigez l'utilisateur vers la page des thèmes
    this.router.navigate(['/themes-list']);
  }
}
