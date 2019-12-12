import { NgModule } from '@angular/core';
import {ReactiveFormsModule}from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatChipsModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatTableModule ,
        MatTabsModule,
        MatIconModule,
        MatSnackBarModule,
        MatRadioModule,
        MatDialogModule,
        
    } from '@angular/material';


const Material =[
  MatButtonModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatChipsModule,
  MatCardModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatTableModule,
  MatTabsModule ,
  MatIconModule,
  MatSnackBarModule,
  MatRadioModule,
  MatDialogModule
]

@NgModule({
  imports: [Material],
  exports:[Material]
})
export class MaterialModule { }
