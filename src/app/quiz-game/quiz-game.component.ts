import { GameServiceService } from './../services/game/game-service.service';
import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../services/quiz/quiz-service.service';
import { Question } from '../models/Question/question';
import { Game } from '../models/Game/game';
import { Router } from '@angular/router';
import { ResponseServiceService } from '../services/response/response-service.service';
import { Response } from '../models/Response/response';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quiz-game',
  templateUrl: './quiz-game.component.html',
  styleUrls: ['./quiz-game.component.scss']
})
export class QuizGameComponent implements OnInit {
  questions: Question[] = [];
  responses: Response[] = [];
  currentQuestionIndex = 0; // Index to keep track of the current question
  game: Game | undefined;
  quizForm: FormGroup = new FormGroup({});
  timer: number = 60; // Temps initial en secondes
  isMenuOpen = false;
  srcImage: string = ''

  constructor(
    private router: Router,
    //private gameService: GameServiceService,
    //private quizService: QuizServiceService,
    //private responseService: ResponseServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    // Retrieve the game from the navigation
    this.game = history.state.game;

    
    this.initializeForm();
    this.startTimer();

    /*
      // Get quizId from the route parameters
      const quizId = this.game.id_quiz;

      // Fetch questions for the given quizId
      this.gameService.getQuestionsForQuiz(quizId).subscribe(
        (questions: Question[]) => {
          this.questions = questions;
          this.startGame();
        },
        (error) => {
          console.error('Error fetching questions:', error);
        }
      );
    }*/
  }

  startGame(): void {
    // You can add any additional setup logic here
    // For example, initializing game-related variables
    // or starting a timer for each question

    // Show the first question
    this.showNextQuestion();

    setInterval(() => {
      this.showNextQuestion();
    }, 30000);
  }

  showNextQuestion(): void {
    // Display the next question
    if (this.currentQuestionIndex < this.questions.length) {
      // Additional logic can be added here, such as animations or timers
      this.currentQuestionIndex++;
    } else {
      // All questions have been shown, you can handle the end of the quiz here
      console.log('Quiz completed!');
    }
  }

  selectResponse(response: Response): void {
    // Handle the user's response to the current question
    // You can add logic to check if the response is correct,
    // update the score, and perform other actions

    // Move to the next question
    this.showNextQuestion();
  }

  initializeForm() {
    this.quizForm = this.fb.group({
      answer: ['']
    });
  }

  startTimer() {
    setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        // Gérer le temps écoulé, par exemple, soumettre automatiquement le formulaire
        this.submitForm();
      }
    }, 1000);
  }

  skipQuestion() {
    alert("Question sautée !");
    // Réinitialiser le formulaire si nécessaire
    this.quizForm.reset();
  }

  validateAnswer() {
    const selectedAnswer = this.quizForm?.get('answer')?.value;
    if (selectedAnswer) {
      alert("Réponse validée : " + selectedAnswer);
      // Réinitialiser le formulaire si nécessaire
      this.quizForm.reset();
    } else {
      alert("Veuillez sélectionner une réponse !");
    }
  }

  submitForm() {
    // Logique pour soumettre le formulaire, par exemple, valider la réponse
    this.validateAnswer();
  }
  quit() {
    // Rediriger l'utilisateur vers la page connexion
    this.router.navigate(['/quizzhistoire']);
  }
}