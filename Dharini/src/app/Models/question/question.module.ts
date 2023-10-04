// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class QuestionModule { }
export interface Question{
       QName : string,
       QDiff:string,
       QAns: string,
      TopicId :number
}