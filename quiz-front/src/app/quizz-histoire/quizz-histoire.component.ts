import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz-histoire',
  templateUrl: './quizz-histoire.component.html',
  styleUrls: ['./quizz-histoire.component.scss']
})
export class QuizzHistoireComponent {
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
