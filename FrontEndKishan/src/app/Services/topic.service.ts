import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from '../Models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  topicUrl : string = "http://localhost:5047/api/Topic";
  
  constructor(private http : HttpClient) { }

  public getAllTopics() : Observable<Topic[]>{
    return this.http.get<Topic[]>(this.topicUrl);
  }

  public getTopicById(id:number): Observable<Topic>{
    return this.http.get<Topic>(this.topicUrl+"/"+id);
  }

  public addTopic(top: Topic) : Observable<Topic>{
    return this.http.post<Topic>(this.topicUrl, top);
  }

  public deleteTopic(id : number) : Observable<string>{
    let tempUrl = this.topicUrl + "/" + id;
    return this.http.delete<string>(tempUrl);
  }

  public updateTopic(top : Topic) : Observable<Topic>{
    let tempUrl = this.topicUrl + "/" + top.topicID;
    return this.http.put<Topic>(tempUrl, top); 
  }
}
