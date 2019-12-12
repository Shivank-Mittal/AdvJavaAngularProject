import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormArray} from '@angular/forms';
import { QuestionServiceService } from '../Services/question-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  myForm:FormGroup;
  questionsRawdata
  question={id :"" ,questionContent:""}
  options={questionId:1,options:"",correctOption:true}
  makeOptions=[];
  insertedId
 
 
  
  constructor(private fb:FormBuilder, private _questionServ : QuestionServiceService ,private snackBar :MatSnackBar) { }

  
  ngOnInit() {
    this.myForm=this.fb.group({
      questionsArray:this.fb.array([])
    });
    this.myForm.valueChanges.subscribe( data=>this.questionsRawdata=data)
    
   
  }

  get questionForms(){
    return this.myForm.get('questionsArray') as FormArray
  }

  addQuestionInput(){
    
    const addQuestion = this.fb.group({
      id:[]="",
      questionContent:[],
      optionA:[],
      optionB:[],
      optionC:[],
      optionD:[],
      answer:[]
    })

    this.questionForms.push(addQuestion);
    
  }
  deletePhone(i){
  this.questionForms.removeAt(i);
  }
  saveQuestion(id:number){
    //this.myForm.valueChanges.subscribe(console.log)
    var qContent=this.questionsRawdata.questionsArray[id];
    console.log("in save mode")
    this.castData(qContent)
    this._questionServ.addQuestion(this.question).subscribe(data =>{ this.insertedId=data, console.log(data) },
    error =>{console.log("errror")},
    () =>{ this.setOptions(this.insertedId), 
      this.snackBar.open("Saved .......  Good To go : "+this.insertedId.questionId,"Close",{duration: 2000 ,panelClass: ['green-snackbar']})
      , this.makeOptions=[], console.log(this.insertedId)});
    
  }
  saveAllQuestions(){
    var ques:[]= this.questionsRawdata.questionsArray
    
    ques.forEach(data => {
      this.castData(data)
     // this._questionServ.addQuestion(this.question).subscribe();
     this._questionServ.addQuestion(this.question).subscribe(data =>{ this.insertedId=data, console.log(data) },
      error =>{console.log("errror")},
    () =>{ this.setOptions(this.insertedId),
      this.snackBar.open("Saved .......  Good To go","Close",{duration: 2000 ,panelClass: ['green-snackbar']}),
      this.makeOptions=[]});
    });
  }
  castData(data){
    console.log(data)
    this.question.questionContent=data.questionContent
    this.options.correctOption=true
    this.makeOptions.push(data.optionA)
    this.makeOptions.push(data.optionB)
    this.makeOptions.push(data.optionC)
    this.makeOptions.push(data.optionD)
  }
  setOptions(insertedId){
    console.log("onComplete")
    this.options.questionId=insertedId;
    console.log(this.makeOptions)
    this.makeOptions.forEach(element => {
      console.log(element)
      this.options.options=element
      this._questionServ.addOptions(this.options).subscribe();
    });
    }
  
  
  
  
}
