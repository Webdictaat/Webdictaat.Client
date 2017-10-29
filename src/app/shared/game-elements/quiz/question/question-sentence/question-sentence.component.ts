import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../question.base';
import { TextPart } from '../../../../models/quiz/question';

@Component({
  selector: 'wd-question-sentence',
  templateUrl: './question-sentence.component.html',
  styleUrls: ['./question-sentence.component.css']
})
export class QuestionSentenceComponent extends QuestionBase implements OnInit {

  public Options: TextPart[];
  public Sentence: TextPart[];
  private _original: TextPart[]; //The original sentence seperated in parts

  ngOnInit() {
    this._original = this.getParts(this.question.text);
    this.Options = this.shuffle(this.getParts(this.question.text));
    this.Sentence = [];
  }

  public select(textPart: TextPart): void{
    this.Sentence.push(textPart);
    this.Options.splice(this.Options.indexOf(textPart), 1);
    this.checkIfCorrect();
  }

  public deselect(textPart: TextPart): void{
    this.Options.push(textPart);
    this.Sentence.splice(this.Sentence.indexOf(textPart), 1);
    this.checkIfCorrect();
  }

  public checkIfCorrect(){
    var originalSentence = "";
    this._original.forEach(part => originalSentence += part.text);
    var currentSentence = "";
    this.Sentence.forEach(part => currentSentence += part.text);
    this.question.isCorrect = originalSentence == currentSentence;
  }
    
}
