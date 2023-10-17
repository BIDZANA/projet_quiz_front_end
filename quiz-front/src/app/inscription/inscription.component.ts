import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  formData = {
    user_name: '',
    email: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    //TODO: Ajouter ici la logique pour envoyer les données du formulaire
    console.log('Données soumises :', this.formData);
    // Rediriger l'utilisateur vers la page de connexion
    this.router.navigate(['/connexion']);
  }
  redirigerVersConnexion() {
    // Redirigez l'utilisateur vers la page connexion (ajustez le chemin selon votre configuration)
    this.router.navigate(['/connexion']);
  }
}

