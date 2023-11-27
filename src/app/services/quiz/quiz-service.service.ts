// quiz-service.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/models/Quiz/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  private apiUrl = 'http://localhost:9090/api/quizzes';

  constructor(private http: HttpClient) { }

  createQuiz(quiz: Quiz): Observable<Quiz> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Quiz>(this.apiUrl, quiz, { headers: headers });
  }

  // Liste des thèmes déjà créés
  getAllThemes(): Observable<string[]> {
    const themesUrl = `${this.apiUrl}/listThemes`;
    return this.http.get<string[]>(themesUrl);
  }

  // Obtenir la liste des quiz pour le thème "Sport"
  getSportQuizzes(): Observable<Quiz[]> {
    const sportQuizUrl = `${this.apiUrl}/listByTheme/sport`;
    return this.http.get<Quiz[]>(sportQuizUrl);
  }

  // Obtenir la liste des quiz pour le thème "Histoire"
  getHistoireQuizzes(): Observable<Quiz[]> {
    const histoireQuizUrl = `${this.apiUrl}/listByTheme/histoire`;
    return this.http.get<Quiz[]>(histoireQuizUrl);
  }

  // Obtenir la liste des quiz pour le thème "culture_generale"
  getCultureGeneraleQuizzes(): Observable<Quiz[]> {
    const cultureGeneraleQuizUrl = `${this.apiUrl}/listByTheme/culture_generale`;
    return this.http.get<Quiz[]>(cultureGeneraleQuizUrl);
  }

  // Obtenir la liste des quiz pour le thème "cinema"
  getCinemaQuizzes(): Observable<Quiz[]> {
    const cinemaQuizUrl = `${this.apiUrl}/listByTheme/cinema`;
    return this.http.get<Quiz[]>(cinemaQuizUrl);
  }

  // Obtenir la liste des quiz pour le thème "musique"
  getMusiqueQuizzes(): Observable<Quiz[]> {
    const musiqueQuizUrl = `${this.apiUrl}/listByTheme/musique`;
    return this.http.get<Quiz[]>(musiqueQuizUrl);
  }
}
