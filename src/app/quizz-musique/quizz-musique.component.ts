import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz-musique',
  templateUrl: './quizz-musique.component.html',
  styleUrls: ['./quizz-musique.component.scss']
})
export class QuizzMusiqueComponent {
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

  goToAnotherPage() {
    
  }
}
