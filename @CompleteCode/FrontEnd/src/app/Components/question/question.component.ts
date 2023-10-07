import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/Services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public name: string = "";
  public topName: string = "";
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  public questionShuffledList: any = []

  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted: boolean = false;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    history.pushState(null, document.title, location.href);
    window.addEventListener('popstate', function (event) {
      history.pushState(null, document.title, location.href);
    });


    this.name = localStorage.getItem("name")!;
    this.topName = localStorage.getItem("topicName")!;
    
    this.getAllQuestions();
    this.startCounter();

    this.questionService.getAllShuffledQuestions(1).subscribe(data => {
      this.questionShuffledList = data;
    });
  }
  getAllQuestions() {
    this.questionList = this.questionService.QJsonFormatter(1);
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  previousQuestion() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any) {

    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    // if (option.correct) {
    // debugger;
    if (this.questionList[currentQno - 1].correct == option.text) {
      this.points += 4;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);


    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

      this.points -= 1;
    }
  }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
          this.points -= 1;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";

  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;

  }
}