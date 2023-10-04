import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Question } from 'src/app/Models/question/question.module';
import { Option } from 'src/app/Models/options/options.module';
import {QuestionService} from 'src/app/Services/question.service'
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
  newQue : Question = {} as Question;
 // newOpt:Question={} as Question;
  constructor(private myService : QuestionService, private router : Router,private http:HttpClient) {
  }

  onNewQue(){
   debugger;
   // const file = this.newEmp.imageFile;
   // this.newEmp.imageFile = "assets/images/" + file;
   this.myService.addQuestion(this.newQue).subscribe((ques)=>{
     alert("Question added successfully");
     this.router.navigate(['/']);
   });
}
// onNewOpt(){
//   this.myService.addOption(this.newOpt).subscribe((opts)=>{
//     //alert("Question added successfully");
//     this.router.navigate(['/']);
// });
// }
}
