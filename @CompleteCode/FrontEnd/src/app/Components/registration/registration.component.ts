import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // selectedRole='Student';
  newStudent: User = {} as User;
  pwd:string="";
  repwd:string="";
  constructor(private userService: UserService,private router:Router){}

  UserForm: FormGroup = new FormGroup({
    UserEmail: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    repassword:new FormControl("",Validators.required),
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
  get repassword() {
    return this.UserForm.get('repwd');
  }
  
  isGenerateOtpClicked = false;
  isValidateOtpClicked = false;
  
  onRegister(){
    this.newStudent.otp=0;
    this.newStudent.role="Student";
    this.newStudent.password = this.pwd;
    this.userService.addUser(this.newStudent).subscribe((stud)=>{
      alert("Student Registered successfully");//why this is not working while present inside the callback
      this.router.navigate(['/studentlogin']);
    });
  }

  onSubmit(UserForm: any) {
    console.log("hello");
    console.log(UserForm.value);
    alert("You Have successfully registered");
  }

}