import { Component, OnInit } from '@angular/core';
import { AssignmentService } from "../../../shared/services/assignment.service";
import { DictaatService } from "../../../shared/services/dictaat.service";
import { Assignment } from "../../../shared/models/assignment";

@Component({
  selector: 'wd-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  
  assignments: Assignment[];

  constructor(
    private dictaatService: DictaatService,
    private assignmentService: AssignmentService
  ) { }

  ngOnInit() {
    this.dictaatService.CurrentDictaat.subscribe((dictaat) => {
      if(dictaat){
         this.assignmentService.getAssignments(dictaat.name)
          .then(assignments => this.assignments = assignments )
      }
    })
  }

  public addAssignment(){
      this.assignmentService.ShowModal().then((assignment) => {
          this.assignments.push(assignment);
      });
  }

}
