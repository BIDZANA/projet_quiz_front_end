import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interface-admin',
  templateUrl: './interface-admin.component.html',
  styleUrls: ['./interface-admin.component.scss']
})
export class InterfaceAdminComponent {
  constructor(private router: Router) {}
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  logout() {
    // Votre code de déconnexion ici
  }
  flipCard() {
    // Toggle card flip logic
    const card = document.querySelector('.card');
    if (card) {
      card.classList.toggle('flipped');
    }
  }

  redirigerVersCreateQuizz() {
    // Redirigez l'utilisateur vers la page connexion (ajustez le chemin selon votre configuration)
    this.router.navigate(['/create-quizz']);
  }
  redirigerVersListeJoueurs() {
    // Redirigez l'utilisateur vers la page connexion (ajustez le chemin selon votre configuration)
    this.router.navigate(['/listejoueurs']);
  }
   
}
