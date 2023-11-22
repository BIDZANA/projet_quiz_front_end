import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz-cinema',
  templateUrl: './quizz-cinema.component.html',
  styleUrls: ['./quizz-cinema.component.scss']
})
export class QuizzCinemaComponent {
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
