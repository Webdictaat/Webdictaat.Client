import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../../../models/quiz/answer';
import { Question } from '../../../../models/quiz/question';
import { QuestionBase, TextPart } from '../question.base';



@Component({
  selector: 'wd-question-blanks',
  templateUrl: './question-blanks.component.html',
  styleUrls: ['./question-blanks.component.css']
})
export class QuestionBlanksComponent extends QuestionBase implements OnInit {

  public textParts : TextPart[] = [];
  public options: TextPart[] = [];


  ngOnInit() {
    this.textParts = this.getParts(this.question.body.sentence);

    this.textParts.forEach(tp => {
        if(tp.type === 'blank'){
          this.options.push(tp);
        }
    })

    if(this.question.body.answers)
    {
      this.question.body.answers.forEach(a => {
        this.options.push(new TextPart(a.text));
      })
    }



    this.shuffle(this.options);
  }

  public remove(part: TextPart){
    if(!this.checker.isChecking){
      var answer = part.value;
      this.options.push(answer);
      part.value = null;
    }
  }

  public select(selectedPart: TextPart){
    
    //place on next possible 
    this.textParts.some((part, i) => {
      if(part.type == 'blank' && !part.value){  
        part.value = selectedPart;
        this.options.splice(this.options.indexOf(selectedPart), 1);
        this.checkIfCorrect();
        return true;
      }
    })
  }

  public checkIfCorrect(){
    var isCorrect = true;
    this.textParts.forEach((part) => {
      if(part.type == 'blank' && (!part.value || (part.value.text != part.text))){
        isCorrect = false;
      }
    });
    this.question.isCorrect = isCorrect;
  }

  public canSelect(){

  }

}
