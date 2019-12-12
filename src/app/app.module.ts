import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import {HttpClientModule} from '@angular/common/http';
import { QuestionListComponent } from './Components/question-list/question-list.component';
import { UpdateQuestionsComponent } from './Components/update-questions/update-questions.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    AddQuestionsComponent,
    QuestionListComponent,
    UpdateQuestionsComponent,
    StartQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[UpdateQuestionsComponent]
})
export class AppModule { }
