import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'core/lib/models/quiz/quiz';
import { Assignment } from 'core/lib/models/assignment';

@Component({
  selector: 'wd-assignment-manager',
  templateUrl: './assignment-manager.component.html',
  styleUrls: ['./assignment-manager.component.css']
})
export class AssignmentManagerComponent implements OnInit {

  @Input()
  public assignment: Assignment;

  constructor() { }

  ngOnInit() {
  }

}
