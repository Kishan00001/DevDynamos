import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '../Models/option';
@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor(private http : HttpClient) { }
  
  optionUrl : string = "http://localhost:5047/api/Option";
  optionJson : any = [];

  public getOptionById(id:number): Observable<Option>{
    return this.http.get<Option>(this.optionUrl+"/"+id);
  }
  
  public updateOption(opt : Option) : Observable<Option>{
    let tempUrl = this.optionUrl + "/" + opt.optionId;
    return this.http.put<Option>(tempUrl, opt); 
  }

  public deleteOption(id : number) : Observable<string>{
    let tempUrl = this.optionUrl + "/" + id;
    return this.http.delete<string>(tempUrl);
  }

  public getAllOptions(id:number) : Observable<Option>{
    return this.http.get<Option>(this.optionUrl+"/normal?quesId="+id);
  }

  public getAllShuffledOptions(id:number) : Observable<Option>{
    return this.http.get<Option>(this.optionUrl+"/shuffle?quesId="+id);
  }

  public addOption(opt: Option) : Observable<Option>{
    return this.http.post<Option>(this.optionUrl, opt);
  }

}