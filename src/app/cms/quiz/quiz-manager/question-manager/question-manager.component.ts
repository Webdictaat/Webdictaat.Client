import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../../shared/models/quiz/question';
import { Answer } from '../../../../shared/models/quiz/answer';

@Component({
  selector: 'wd-question-manager',
  templateUrl: './question-manager.component.html',
  styleUrls: ['./question-manager.component.css']
})
export class QuestionManagerComponent implements OnInit {

  @Input()
  public question : Question;

  constructor() { }

  ngOnInit() {
  }

  public AddAnswer(){
    if(!this.question.body.answers)
      this.question.body.answers = [];

    this.question.body.answers.push(new Answer());
  }

}
