import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  formData = {
    user_name: '',
  };

  constructor(private router: Router) {}

  onSubmit() {
    //TODO: Ajouter ici la logique pour envoyer les données du formulaire
    console.log('Données soumises :', this.formData);
    // Rediriger l'utilisateur vers la page de connexion
    this.router.navigate(['/themes-list']);
  }

  redirigerVersThemes() {
    // Redirigez l'utilisateur vers la page connexion (ajustez le chemin selon votre configuration)
    this.router.navigate(['/themes-list']);
  }
}
