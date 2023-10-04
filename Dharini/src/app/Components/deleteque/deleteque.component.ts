import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/Models/question/question.module';
import { QuestionService } from 'src/app/Services/question.service';

@Component({
  selector: 'app-deleteque',
  templateUrl: './deleteque.component.html',
  styleUrls: ['./deleteque.component.css']
})
export class DeletequeComponent {

  delQue : Question = {} as Question;

  constructor(private myService : QuestionService, private router : Router,private http:HttpClient){}

     deleteQuestion(questionId:string){
      this.myService.deleteQuestion(questionId).subscribe((ques)=>{
        alert("Question deleted successfully");
        this.router.navigate(['/']);

      },error=>{
        console.error("error in deleting the question",error);
      });

     }
       
  
}

