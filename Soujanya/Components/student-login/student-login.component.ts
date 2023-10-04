import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/Models/users';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  users: Users = {} as Users;
  UserForm: FormGroup = new FormGroup({
    UserEmail: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(20)])})
    get UserEmail(){
      return this.UserForm.get('UserEmail');
    }
    get password(){
      return this.UserForm.get('password');
    }
  isGenerateOtpClicked=false;
  isValidateOtpClicked=false;
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
