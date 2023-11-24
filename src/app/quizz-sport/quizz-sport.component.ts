import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz-sport',
  templateUrl: './quizz-sport.component.html',
  styleUrls: ['./quizz-sport.component.scss']
})
export class QuizzSportComponent {
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
