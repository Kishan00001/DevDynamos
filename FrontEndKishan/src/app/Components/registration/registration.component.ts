import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  selectedRole='Student';
  users: User = {} as User;
  UserForm: FormGroup = new FormGroup({
    UserEmail: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    UserName:new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z0-9_]*$/)]),
  })
  get UserEmail(){
    return this.UserForm.get('UserEmail');
  }
  get password(){
    return this.UserForm.get('password');
  }
  get UserName(){
    return this.UserForm.get('UserName');
  }
  
  isGenerateOtpClicked = false;
  isValidateOtpClicked = false;
  generateOtp(): void {
    if (this.UserForm.valid){
    this.isGenerateOtpClicked = true;
    // this.http.post({}).subscribe(
    //   (response)=>{

    //   },
    //   (error)=>{

    //   }
    // );
    //write the code to generate the otp
    }else{
      alert("Please fill all the fields");
    }
  }
  validateOtp(): void {
    this.isValidateOtpClicked = true;
    
  }
  onSubmit(UserForm: any) {
    alert("You Have successfully logged in");
    //console.log(UserForm.value);
  }
}