import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
   categories:string |unknown;
    dynamicValue:string="your-dynamic-value";
    //generatedLink:string;
    // constructor(){
    //  this.generatedLink='https://example.com/' + this.dynamicValue;
    // }
    constructor(private router : Router,private http:HttpClient) {

    
    }
    onClick(){
      debugger;
      // const file = this.newEmp.imageFile;
      // this.newEmp.imageFile = "assets/images/" + file;
      
        this.router.navigate(['/add']);
      ;
    }
  
}
