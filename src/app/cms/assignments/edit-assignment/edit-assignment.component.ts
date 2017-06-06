import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from "../../../shared/models/assignment";

@Component({
  selector: 'wd-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {

  @Input()
  public assignment: Assignment;

  constructor() { }

  ngOnInit() {
  }

}
