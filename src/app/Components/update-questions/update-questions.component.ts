import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MatDialog,MAT_DIALOG_DATA} from '@angular/material'
import { FormGroup,FormControl } from '@angular/forms';
import { QuestionServiceService } from 'src/app/Services/question-service.service';

@Component({
  selector: 'app-update-questions', 
  templateUrl: './update-questions.component.html',
  styleUrls: ['./update-questions.component.css']
})
export class UpdateQuestionsComponent implements OnInit {

  constructor( private _dialogRef:MatDialogRef<UpdateQuestionsComponent>,@Inject(MAT_DIALOG_DATA) public data:any ,  private _questionService:QuestionServiceService) { }

 
  
  UpdateFormGroup= new FormGroup({
    id:new FormControl({value:this.data.Id,disabled:true}),
    content: new FormControl('')
  })

  
  onSubmit(){
    var question={id:this.data.Id,questionContent:this.UpdateFormGroup.value.content}
    
    console.log(this.UpdateFormGroup.value.content)
    this._questionService.updateQUestion(this.data.Id,question).subscribe(
      ()=>console.log("submited" + question)
    )
    this._dialogRef.close

  }
  ngOnInit() {
    
  }

}
