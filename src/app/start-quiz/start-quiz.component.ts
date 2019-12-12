import { Component, OnInit } from '@angular/core';
import { QuizserviceService } from '../Services/quizservice.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  quizQuestions=[]

  quizValue=[{ID:0 , Question:"" , values:[]}]
  options=[]
  constructor( private _quizService:QuizserviceService) { }

  makeQuiz(){
    this._quizService.getquestionId()
    .subscribe(
      data=>{ this.quizQuestions= data; console.log(data);
        for (var _i = 0; _i < this.quizQuestions.length; _i++) {
          this._quizService.getoptions(this.quizQuestions[_i].id)
          .subscribe(
            choice => {
              var testOptins =[]
              choice.forEach(option => {
               testOptins.push(option.options)
              } );
                var quizEntity ={ ID : this.quizQuestions[_i].id,
                             Question : this.quizQuestions[_i].questionContent,
                              values :choice };
                  this.quizValue.push(quizEntity)
            })
        }
       },
      ()=>{ //console.log(this.quizValue)
      }
      
      )

     
   
  }

  ngOnInit() {
   this.makeQuiz()
  }

}
