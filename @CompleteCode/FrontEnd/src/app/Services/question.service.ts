import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Question } from '../Models/question';
import { OptionService } from './option.service';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http : HttpClient, private optionService: OptionService) { }

  public qList : Question[] = [];
  public qOptionList : any = [];
  public currQ : any;
  public optionList : any =[];
  optionJson : any = [];
  getQuestionJson(){
    return this.http.get<any>("assets/questions.json");
  }
  questionUrl : string = "http://localhost:5047/api/Question";
  optionUrl : string = "http://localhost:5047/api/Option";

  public getQuestionById(id:number): Observable<Question>{
    return this.http.get<Question>(this.questionUrl+"/"+id);
  }
  
  public updateQuestion(que : Question) : Observable<Question>{
    let tempUrl = this.questionUrl + "/" + que.qId;
    return this.http.put<Question>(tempUrl, que); 
  }

  public deleteQuestion(id : number) : Observable<string>{
    let tempUrl = this.questionUrl + "/" + id;
    return this.http.delete<string>(tempUrl);
  }

  public getQuestionByQName(qname: string) : Observable<Question>{
    let tempUrl = this.questionUrl + "/qname?qname=" + qname;
    return this.http.get<Question>(tempUrl);
  }
  
  public getAllQuestions(id:number) : Observable<Question[]>{
    return this.http.get<Question[]>(this.questionUrl+"/normal?topicId="+id);
  }

  public getAllShuffledQuestions(id:number) : Observable<Question[]>{
    return this.http.get<Question[]>((this.questionUrl+"/shuffle?topicId="+id));
  }

  public QDiffChecker(qs:Question[],hard:number,medium:number,easy:number):  Question[]{
      return qs;

  }

  public QJsonFormatter(id:number):any{
    this.getAllShuffledQuestions(id).subscribe((questions)=>{
      this.qList=this.QDiffChecker(questions,2,3,5);
      this.qList.forEach(ele => {
          this.optionService.getAllShuffledOptions(ele.qId).subscribe((optdata)=>{
            this.optionJson=[{"text":optdata.optionA},{"text":optdata.optionB},{"text":optdata.optionC},{"text":optdata.optionD}]
            this.currQ = {"QName":ele.qName ,"options":this.optionJson,"correct":ele.qAns }
            this.qOptionList.push(this.currQ);
          })
        })
      });
      return (this.qOptionList);
    }
  public addQuestion(que: Question) : Observable<Question>{
    return this.http.post<Question>(this.questionUrl, que);
  }
}