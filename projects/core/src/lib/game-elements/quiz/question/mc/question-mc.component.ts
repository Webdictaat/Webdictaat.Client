import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../../models/quiz/question';
import { Answer } from '../../../../models/quiz/answer';
import { QuestionBase } from '../question.base';

@Component({
  selector: 'wd-question-mc',
  templateUrl: './question-mc.component.html',
  styleUrls: ['./question-mc.component.css']
})
export class QuestionMcComponent extends QuestionBase implements OnInit {

  public answer : Answer;

  ngOnInit() {
  }

  public isSelected(answer: Answer){
    return answer == this.answer;
  }

  public selectAnswer(answer: Answer){
    if(!this.checker.isChecking){
      this.answer = answer;
      this.checkIfCorrect();
    }
  }

  public checkIfCorrect(){
      //only need to check first question.
      this.question.isCorrect = this.answer.isCorrect;
  }


}
