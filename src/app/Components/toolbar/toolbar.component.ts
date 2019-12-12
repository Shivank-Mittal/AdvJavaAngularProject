import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  index=0;
  selectedVal="Add Questions";
  displayedColumns=["id","Question"]
  constructor() { }

  onTabChanged(value){
    console.log(value)
  }

  onValChange(value){
    this.selectedVal=value;
  }
  ngOnInit() {
    console.log(this.selectedVal)
  }

}
