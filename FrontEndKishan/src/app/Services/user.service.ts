import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl : string = "http://localhost:5047/api/User";
  
  constructor(private http : HttpClient) { }

  public getAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }

  public getUserByMail(mail : string) : Observable<User>{
    let tempUrl = this.userUrl + "/email?email=" + mail;
    return this.http.get<User>(tempUrl);
  }

  public getUserById(id:number): Observable<User>{
    return this.http.get<User>(this.userUrl+"/"+id);
  }

  public addUser(usr: User) : Observable<User>{
    return this.http.post<User>(this.userUrl, usr);
  }

  public deleteUser(id : number) : Observable<string>{
    let tempUrl = this.userUrl + "/" + id;
    return this.http.delete<string>(tempUrl);
  }

  public updateUser(usr : User) : Observable<User>{
    let tempUrl = this.userUrl + "/" + usr.userId;
    return this.http.put<User>(tempUrl, usr); 
  }
}
