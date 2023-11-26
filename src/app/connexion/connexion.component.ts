// connexion.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User/user';
import { AuthentificationServiceService } from '../services/authentification/authentification-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  formData: User = new User('', '');

  constructor(
    private router: Router, 
    private authService: AuthentificationServiceService
  ) {}

  onSubmit() {
    this.authService.signIn(this.formData.username).subscribe(
      (user: User) => {
        if (user) {
          console.log(user);
          if (user.role === 'USER') {
            this.router.navigate(['/themes-list']);
          } else if (user.role === 'ADMIN') {
            this.router.navigate(['/interface-admin']);
          }
        } else {
          console.error('Aucun utilisateur retourné');
        }
      },
      error => {
        console.error('Une erreur s\'est produite lors de la connexion :', error);
      }
    );
  }
}
