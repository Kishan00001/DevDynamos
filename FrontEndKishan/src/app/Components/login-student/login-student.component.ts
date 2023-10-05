import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { OtpService } from 'src/app/Services/otp.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent {
  EmailUser:string="";
  PasswordUser:string="";
  Currotp : number = 0;
  constructor(private otpService:OtpService){}
  UserForm: FormGroup = new FormGroup({
    UserEmail: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    OtpValidate: new FormControl(0)
    //  UserName:new FormControl("",[Validators.required]),
  })
  get UserEmail(){
    return this.UserForm.get('UserEmail');
  }
  get password(){
    return this.UserForm.get('password');
  }
  


  isGenerateOtpClicked = false;
  isValidateOtpClicked = false;

  generateOtp(email:string,pwd:string): void {
    if (this.UserForm.valid){
      this.otpService.generateOTP(email,pwd).subscribe((data)=>{
        console.log(data);
        if(data=='OTP sent successfully.'){
          alert(data);
          this.isGenerateOtpClicked = true;
        }
        else{
          alert(data);
        }
    });
    }else{
      alert("Please fill all the fields");
    }
  }

  validateOtp(email:string,otp:number): void {
    this.otpService.validateOTP(email,otp).subscribe((data)=>{
      console.log(data);
      if(data=="OTP validated successfully."){
        alert(data);
        this.isValidateOtpClicked = true;
      }
      else{
        alert(data);
      }
    }) 
  }
  onSubmit(UserForm: any) {
    alert("You Have successfully logged in");
    //console.log(UserForm.value);
  }
}
