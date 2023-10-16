import { Component } from '@angular/core';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent {

  formData = {
    theme: '',
    description: '',
    image: '',
  };

  onSubmit() {
    console.log('Formulaire soumis avec les données suivantes :', this.formData);
  }
}
