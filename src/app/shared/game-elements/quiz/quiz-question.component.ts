import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, Answer } from "../../models/quiz";

@Component({
  selector: 'wd-quiz-question',
  templateUrl: './quiz-question.component.html',
})
export class QuizQuestionComponent implements OnInit {

  @Input()
  public question: Question;

  @Output()
  public onAnswer = new EventEmitter();

  constructor() { }

  ngOnInit() {  }

  public selectAnswer(answer: Answer){
    this.question.selectedAnswer = answer;
    this.onAnswer.emit(answer);
  }

}
