import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from '../services/authentification/authentification-service.service';
import { User } from '../models/User/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  formData: User = new User('', '');

  constructor(private router: Router, private authService: AuthentificationServiceService) {}

  onSubmit() {
    // Utilisez le service d'authentification pour soumettre les données du formulaire
    this.authService.signUp(this.formData).subscribe(
      (response) => {
        console.log('Inscription réussie :', response);
        // Rediriger l'utilisateur vers la page de connexion
        this.router.navigate(['/connexion']);
      },
      (error) => {
        console.error('Erreur lors de l\'inscription :', error);
        // Gérer l'erreur ici (afficher un message à l'utilisateur, par exemple)
      }
    );
  }

  redirigerVersConnexion() {
    // Rediriger l'utilisateur vers la page connexion
    this.router.navigate(['/connexion']);
  }
}