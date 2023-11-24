import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz-culturegenerale',
  templateUrl: './quizz-culturegenerale.component.html',
  styleUrls: ['./quizz-culturegenerale.component.scss']
})
export class QuizzCulturegeneraleComponent {
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
