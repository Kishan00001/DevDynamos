import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-action-student',
  templateUrl: './action-student.component.html',
  styleUrls: ['./action-student.component.css']
})
export class ActionStudentComponent {

  studName : string = "";

  @ViewChild('name') nameKey!: ElementRef;
  constructor() { }


  startQuiz(){
    // localStorage.setItem("name",this.nameKey.nativeElement.value);
  }
}
