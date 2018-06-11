import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../../models/quiz/question';
import { Answer } from '../../../models/quiz/answer';
import { Checker } from './question.base';


@Component({
  selector: 'wd-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  public question: Question;

  @Output()
  public onAnswer = new EventEmitter();

  public checker : Checker;
  public state :string = 'idle';

  constructor() { }

  ngOnInit() {  
      this.checker = new Checker();
  }

  public check(){
    this.checker.isChecking = true;
    this.state = this.question.isCorrect ? 'correct' : 'wrong';
  }

  public continue(){
    this.checker.reset();
    this.state = 'idle';
    this.onAnswer.emit();
  }

}
