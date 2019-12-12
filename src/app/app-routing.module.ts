import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [
  {path:'',redirectTo: '/login',pathMatch:'full'},
  {path:'admin' ,component : ToolbarComponent},
  {path:'student', component:StartQuizComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
