import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wd-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input()
  public qid : number;

  constructor() { }

  ngOnInit() {
  }

}
