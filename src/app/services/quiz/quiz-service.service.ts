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

  //Liste des thèmes déjà créés
  getAllThemes(): Observable<string[]> {
    const themesUrl = `${this.apiUrl}/listThemes`;
    return this.http.get<string[]>(themesUrl);
  }
}
