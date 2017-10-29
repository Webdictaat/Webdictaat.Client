import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../question.base';
import { Answer } from '../../../../models/quiz/answer';

@Component({
  selector: 'wd-question-group',
  templateUrl: './question-group.component.html',
  styleUrls: ['./question-group.component.css']
})
export class QuestionGroupComponent extends QuestionBase implements OnInit {

  ngOnInit() {
  }

  public toggleAnswer(answer: Answer){
    if(!this.checker.isChecking){

      if(this.isSelected(answer)){
          //remove answer
          this.question.selectedAnswers.splice(this.question.selectedAnswers.indexOf(answer), 1);
      }
      else{
         //add answer
          this.question.selectedAnswers.push(answer);
      }
      this.checkIfCorrect();
    }
  }

  public isSelected(answer: Answer){
    return this.question.selectedAnswers.indexOf(answer) != -1;
  } 

  public checkIfCorrect(){
    var isCorrect = true;

    //check if all correct answers are selected
    this.question.answers.forEach((answer) => {
      if(answer.isCorrect && !this.isSelected(answer)){
        isCorrect = false;
      }  
    });

    //check if all selected answers are correct
    this.question.selectedAnswers.forEach((answer) => {
      if(!answer.isCorrect){
        isCorrect = false;
      }  
    });

    this.question.isCorrect = isCorrect;
  }

}
