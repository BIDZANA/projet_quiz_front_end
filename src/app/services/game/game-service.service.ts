import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/Game/game';
import { Question } from 'src/app/models/Question/question';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  private apiUrl = 'http://localhost:9090/api/games'; // Remplacez par l'URL réelle de votre backend

  constructor(private http: HttpClient) { }

  // Récupérer la liste des jeux
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  // Créer un nouveau jeu
  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.apiUrl, game);
  }

  updateGame(id: number, updatedGame: Game): Observable<Game> {
    const updateUrl = `${this.apiUrl}/${id}`;
    return this.http.put<Game>(updateUrl, updatedGame);
  }

  startGame(quizId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/start/${quizId}`, {});
  }

  submitResponse(responseId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit-response`, { responseId });
  }

  // Récupérer toutes les questions pour un quiz donné
  getQuestionsForQuiz(quizId: number): Observable<Question[]> {
    const questionsUrl = `${this.apiUrl}/${quizId}/questions`;
    return this.http.get<Question[]>(questionsUrl);
  }
}
