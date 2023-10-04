// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Question } from '../Models/question/question.module';

// @Injectable({
//   providedIn: 'root'
  
// })
// export class QuestionService {
//   baseUrl : string = "NEED TO ADD THE LINK OF QUESTION TABLE";
//   constructor(private http : HttpClient) { }
//   public addQuestion(ques: QuestionService) : Observable<QuestionService>{
//     return this.http.post<QuestionService>(this.baseUrl, ques);
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../Models/question/question.module';

//use Constructors to inject the dependencies for the component or the class and use OnInit Interface for initializing the data of the Components. 

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  baseUrl : string = "http:ion//localhost:5231/api/Employee";
  tempUrl:string=""

  constructor(private http : HttpClient) { }

  // public getAllEmployees(): Observable<Employee[]> {
  //   return this.http.get<Employee[]>(this.baseUrl);
  // }

  // public getEmployee(id : number) : Observable<Employee>{
  //   let tempUrl = this.baseUrl + "/" + id;
  //   return this.http.get<Employee>(tempUrl);
  // }

  public addQuestion(que: Question) : Observable<Question>{
    return this.http.post<Question>(this.baseUrl, que);
  }

  public deleteQuestion(questionId : string) : Observable<string>{
    let tempUrl = this.baseUrl + "/" + questionId;
    return this.http.delete<string>(tempUrl);
  }

  // public updateEmployee(emp : Employee) : Observable<Employee>{
  //   let tempUrl = this.baseUrl + "/" + emp.empId;
  //   return this.http.put<Employee>(tempUrl, emp); 
  //}
}