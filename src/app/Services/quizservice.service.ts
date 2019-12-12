import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { addQuestionsI } from '../Interface/addQuestions';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {

  constructor( private http : HttpClient) { }

   basePath:string="http://localhost:8080/quiz-rest-api/rest/questions";

  getquestionId() :Observable<any>{
    let questions= this.http.get<addQuestionsI[]>(this.basePath+"/getAllQuestions");
    return questions
  }

  getoptions(id): Observable<any>{
    return this.http.get(this.basePath+"/optionList?questionID="+id);
  }
}
