import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../../models/quiz/question';
import { Answer } from '../../../models/quiz/answer';


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

  public isChecking : boolean = false;
  public state :string = 'idle';

  constructor() { }

  ngOnInit() {  

  }

  public check(){
    this.isChecking = true;
    this.state = this.question.isCorrect ? 'correct' : 'wrong';
  }

  public continue(){
    this.isChecking = false;
    this.state = 'idle';
    this.onAnswer.emit();
  }

}
