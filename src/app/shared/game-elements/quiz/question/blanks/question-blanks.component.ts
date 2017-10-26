import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../../../models/quiz/answer';
import { Question } from '../../../../models/quiz/question';
import { QuestionBase } from '../question.base';

class TextPart{

  text: string;
  type: string;
  value: Answer;

  constructor(text, type){
    this.text = text;
    this.type = type;
  }
}

@Component({
  selector: 'wd-question-blanks',
  templateUrl: './question-blanks.component.html',
  styleUrls: ['./question-blanks.component.css']
})
export class QuestionBlanksComponent extends QuestionBase implements OnInit {

  public textParts : TextPart[] = [];
  public answers: Answer[] = [];
  public msg: string = 'kip';

  ngOnInit() {
    this.answers = this.question.answers;
    var epicregex = /(\[\[.*?\]\])/g;
    this.question.text.split(epicregex).forEach((text, i) => {     
        var t = 'text';
        if(text.match(epicregex)){
          t = 'blank'
          var text = text.slice(2, text.length -2);
          this.answers.push(new Answer({id: 0, text:text}));
        }

        this.textParts.push(new TextPart(text, t));          
    })
  }

  public remove(part: TextPart){
      var answer = part.value;
      this.answers.push(answer);
      this.question.selectedAnswers.splice(this.question.selectedAnswers.indexOf(answer), 1)
      part.value = null;
  }

  public select(answer: Answer){
    
    //place on next possible 
    this.textParts.some((part, i) => {
      if(part.type == 'blank' && !part.value){  
        part.value = answer;
        this.question.selectedAnswers.push(part.value);
        this.question.answers.splice(this.question.answers.indexOf(answer), 1);
        this.checkIfComplete();
        return true;
      }
    })
  }

  public checkIfComplete(){
    var isCorrect = true;
    this.textParts.forEach((part) => {
      if(part.type == 'blank' && (!part.value || part.value.text != part.text)){
        isCorrect = false;
      }
    });
    this.question.isCorrect = isCorrect;
  }

  public canSelect(){

  }

}
