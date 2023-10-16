import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importez le service Router

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  constructor(private router: Router) {} // Injectez le service Router dans le constructeur

  redirigerVersInscription() {
    // Redirigez l'utilisateur vers la page d'inscription (ajustez le chemin selon votre configuration)
    this.router.navigate(['/inscription']);
  }
}
