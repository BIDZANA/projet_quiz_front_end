import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/Response/response';

@Injectable({
  providedIn: 'root'
})
export class ResponseServiceService {
  private apiUrl = 'http://localhost:9090/api/responses';

  constructor(private http: HttpClient) { }

  getResponsesByQuestionId(questionId: number): Observable<Response[]> {
    const url = `${this.apiUrl}/byQuestion/${questionId}`;
    return this.http.get<Response[]>(url);
  }
}
