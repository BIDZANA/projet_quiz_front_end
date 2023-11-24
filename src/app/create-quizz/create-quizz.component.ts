import { Component } from '@angular/core';

@Component({
  selector: 'app-create-quizz',
  templateUrl: './create-quizz.component.html',
  styleUrls: ['./create-quizz.component.scss']
})
export class CreateQuizzComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  logout() {
    // Votre code de déconnexion ici
  }
  
  
  formData = {
    theme: '',
    description: '',
    image: '',
  };

  onSubmit() {
    console.log('Formulaire soumis avec les données suivantes :', this.formData);
  }
}
