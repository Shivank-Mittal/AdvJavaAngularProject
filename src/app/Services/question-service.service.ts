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
export class QuestionServiceService {

  constructor(private http:HttpClient) { }

  private baseURL :string ="http://localhost:8080/quiz-rest-api/rest/questions"
  test(){
    return "working"
  }
  

  addQuestion(qContent){
  
    console.log(qContent);
    var value= this.http.post(this.baseURL+"/create",qContent,httpOptions)

    return value
     
  }

  addOptions(option){
    return this.http.post(this.baseURL+"/create/option/",option,httpOptions);
  }
  
  allQuestions() :Observable<any>{
    let questions= this.http.get<addQuestionsI[]>(this.baseURL+"/getAllQuestions");
    return questions
  }

  filterQuestion(filterValue) :Observable<any>{
    let filterQuestion =this.http.get(this.baseURL+"/searchContent?qContent="+filterValue)
    console.log(filterQuestion);
    return filterQuestion
  }

  deleteQuestion(id : number){
    console.log("delete Service")
    return this.http.post(this.baseURL+"/delete",id,httpOptions)
  }

  updateQUestion(id,update){
   return this.http.put(this.baseURL+"/update/"+id,update,httpOptions)
  }


}
