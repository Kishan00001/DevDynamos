import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(private http : HttpClient) { }

  //http://localhost:5047/api/Otp/generateOTP?email=kishanmaharana04%40gmail.com&pwd=Kkm123
  //http://localhost:5047/api/Otp/validateOTP?email=kishanmaharana04%40gmail.com&otp=145633

  otpUrl : string = "http://localhost:5047/api/Otp";

  public generateOTP(email:string,pwd:string) : Observable<string>{
    let tempUrl = `${this.otpUrl}/generateOTP?email=${email}&pwd=${pwd}`;
    console.log(tempUrl);
    // return this.http.put<string>(tempUrl,email); 
    return this.http.get(tempUrl,{responseType:"text"}); 
  }

  public validateOTP(email:string,otp:number) : Observable<string>{
    let tempUrl = `${this.otpUrl}/validateOTP?email=${email}&otp=${otp}`;
    console.log(tempUrl);
    return this.http.get(tempUrl,{responseType:"text"}); 
  }
  // public validateOTP(usr : User) : Observable<User>{
  //   let tempUrl = this.otpUrl + "/" + usr.UserEmail;
  //   return this.http.put<User>(tempUrl, usr); 
  // }

}
