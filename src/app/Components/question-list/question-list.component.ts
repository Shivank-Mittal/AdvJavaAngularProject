import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from 'src/app/Services/question-service.service';
import {MatDialog,MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material'
import { UpdateQuestionsComponent } from '../update-questions/update-questions.component';



@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {


      
  constructor(private _questionService:QuestionServiceService, private _dialog :MatDialog ) { }

    
  questions ;
  displayedColumns: string[] = ['ID', 'Question','change'];
 
  deleteQuestion(id ){
    console.log(id);
    this._questionService.deleteQuestion(id).subscribe(
      () =>{ this.updateDataSource()}
    );
    
  }
  updateDataSource(){
    this._questionService.allQuestions()
    .subscribe(data => {this.questions=data;
      console.log(this.questions);
      })
  }

   onUpadateQuestion(id){
     const dialogConfig = new MatDialogConfig;
     dialogConfig.disableClose=true;
     dialogConfig.autoFocus=true;
     dialogConfig.width="60%";
     console.log("test-:" +id)
     let dialogRef= this._dialog.open(UpdateQuestionsComponent,{data:{Id:id}});
     dialogRef.afterClosed().subscribe(
       ()=>this.updateDataSource()
     )
   }

   applyFilter(data){
    if(data !== '') {
      this._questionService.filterQuestion(data)
      .subscribe(data => {this.questions=data})
    }
    else{
      this.updateDataSource()
    }
      
    
  }
   
  ngOnInit() {
    this.updateDataSource();
      
  }
  

}
