import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  easy:number=0;
 medium:number=0;
 hard:number=0;
 total=0;
  //generatedLink:string;
  // constructor(){
  //  this.generatedLink='https://example.com/' + this.dynamicValue;
  // }
    categories:string |unknown;
    dynamicValue:string="your-dynamic-value";
    
    //hard:any;
    result: number=0;
    
    addNumbers(){
      debugger;
     this.result= (this.easy + this.medium)-this.total ;
     console.log(this.result);
   
   // constructor(private router : Router,private http:HttpClient) {}
   //click(){
     // debugger;
      // const file = this.newEmp.imageFile;
      // this.newEmp.imageFile = "assets/images/" + file;
      
   // this.router.navigate(['/add']);
      
    }
 }
