import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'core';
import { Assignment } from 'core';

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
