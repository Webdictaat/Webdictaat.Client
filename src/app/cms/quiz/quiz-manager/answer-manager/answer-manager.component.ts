import { Component, OnInit, Input } from '@angular/core';

class Answer{
  public isCorrect: boolean;
  public text: string;
}

@Component({
  selector: 'wd-answer-manager',
  templateUrl: './answer-manager.component.html',
  styleUrls: ['./answer-manager.component.css']
})
export class AnswerManagerComponent implements OnInit {

  @Input()
  public answers: Answer[];

  @Input()
  public canBeCorrect : boolean;

  constructor() { }

  ngOnInit() {
  }

  public RemoveAnswer(answer){
    this.answers.splice(this.answers.indexOf(answer), 1);
  }

}
