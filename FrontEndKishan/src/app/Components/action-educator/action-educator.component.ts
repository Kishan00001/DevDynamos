import { Component } from '@angular/core';

@Component({
  selector: 'app-action-educator',
  templateUrl: './action-educator.component.html',
  styleUrls: ['./action-educator.component.css']
})
export class ActionEducatorComponent {
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
      //  debugger;
      this.result= (this.easy + this.medium)-this.total ;
      console.log(this.result);
  }
}