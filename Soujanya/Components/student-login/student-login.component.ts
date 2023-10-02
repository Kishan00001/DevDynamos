import { Component } from '@angular/core';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  isGenerateOtpClicked=false;
  isValidateOtpClicked=false;
  generateOtp():void{
  
    this.isGenerateOtpClicked=true;
  }
  validateOtp():void{
    this.isValidateOtpClicked=true;
  }
}
