import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/Models/question';
import { QuestionService } from 'src/app/Services/question.service';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent {
  
  delQue : Question = {} as Question;

  constructor(private myService : QuestionService, private router : Router,){}

     deleteQuestion(quesName:string){
      this.myService.getQuestionByQName(quesName).subscribe((quesinfo)=>{
        this.myService.deleteQuestion(quesinfo.qId).subscribe((ques)=>{
          alert("Question deleted successfully");
          this.router.navigate(['/']);
        },error=>{
          console.error("error in deleting the question",error);
        });
      })
     }
}
