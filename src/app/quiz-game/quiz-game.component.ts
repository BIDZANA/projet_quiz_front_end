import { GameServiceService } from './../services/game/game-service.service';
import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../services/quiz/quiz-service.service';
import { Question } from '../models/Question/question';
import { Game } from '../models/Game/game';
import { Router } from '@angular/router';
import { ResponseServiceService } from '../services/response/response-service.service';
import { Response } from '../models/Response/response';

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

  constructor(
    private router: Router,
    private gameService: GameServiceService,
    private quizService: QuizServiceService,
    private responseService: ResponseServiceService
  ) { }

  ngOnInit(): void {

    // Retrieve the game from the navigation
    this.game = history.state.game;

    // Check if the game is defined
    if (!this.game) {
      this.router.navigate(['/themes-list']);
    } else {
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
    }
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
}
