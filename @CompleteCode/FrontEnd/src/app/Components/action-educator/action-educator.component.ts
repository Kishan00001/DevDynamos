import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { TopicService } from 'src/app/Services/topic.service';
import { Topic } from 'src/app/Models/topic';
@Component({
  selector: 'app-action-educator',
  templateUrl: './action-educator.component.html',
  styleUrls: ['./action-educator.component.css']
})
export class ActionEducatorComponent implements OnInit{
  // easy: number = 0;
  // medium: number = 0;
  // hard: number = 0;
  // total: number = 0;
  // categories: string | unknown;
  // dynamicValue: string = "your-dynamic-value";
  // result: number = 0;
  // addNumbers() {
  //   debugger;
  //   this.result = this.total - (this.easy + this.medium);
  //   console.log(this.result);
  // }
  progress: number=0;
  message: string="Welcome";
  newTopic: Topic = {} as Topic;
  @Output() public onUploadFinished = new EventEmitter();
  
  constructor(private http: HttpClient,private topicService:TopicService) { }
  ngOnInit() {
  }
  uploadFile = (files:FileList|null) => {
    if (files?.length === 0) {
      return;
    }
    let fileToUpload = <File>files![0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.http.post('http://localhost:5047/api/FileAPI', formData, {reportProgress: true, observe: 'events'})
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total!);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });

    //method to generate test Id
    
    
    // method to add test
    this.newTopic.topicFile= fileToUpload.name;
    this.topicService.addTopic(this.newTopic).subscribe((top)=>{
      alert("Question Set Successfully");
    })
    // console.log(fileToUpload.name);
  }
  //method to reset all test
  resetAll(){
    this.topicService.resetAllTests().subscribe((data)=>{
      // console.log(data);
      alert(data);
    });
  }
}