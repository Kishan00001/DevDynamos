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
 total:number=0;
categories:string |unknown;
dynamicValue:string="your-dynamic-value";    
result: number=0;
    addNumbers(){
      debugger;
     this.result= this.total-(this.easy + this.medium);
     console.log(this.result);
    }
 }
