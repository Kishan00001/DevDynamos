import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Users } from 'src/app/Models/users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: Users = {} as Users;
  UserForm: FormGroup = new FormGroup({
    UserEmail: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl(0, [Validators.required, Validators.minLength(8), Validators.maxLength(20)])
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
  generateOtp(): void {
    if (this.UserForm.valid){
    this.isGenerateOtpClicked = true;
    //write the code to generate the otp
    }else{
      alert("Please fill all the fields");
    }
  }
  validateOtp(): void {
    this.isValidateOtpClicked = true;
  }
  onSubmit(UserForm: any) {
    alert("You Have successfully loggedin");
    //console.log(UserForm.value);
  }
}

