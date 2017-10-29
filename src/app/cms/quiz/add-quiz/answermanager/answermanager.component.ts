import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../../../shared/models/quiz/question';

@Component({
  selector: 'wd-answer-manager',
  templateUrl: './answermanager.component.html',
  styleUrls: ['./answermanager.component.css']
})
export class AnswermanagerComponent implements OnInit {

  @Input()
  public question: Question;

  constructor() { }

  ngOnInit() {
  }

}
