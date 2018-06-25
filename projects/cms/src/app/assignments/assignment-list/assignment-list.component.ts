import { Component, OnInit } from '@angular/core';
import { AssignmentService } from "core";
import { DictaatService } from "core";
import { Assignment } from "core";

@Component({
  selector: 'wd-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  
  private dictaatName: string;
  public selectedIndex: number;
  public selectedAssignment: any;
  public assignments: Assignment[];

  constructor(
    private dictaatService: DictaatService,
    private assignmentService: AssignmentService
  ) { }

  ngOnInit() {
    this.dictaatService.CurrentDictaat.subscribe((dictaat) => {
      if(dictaat){
         this.dictaatName = dictaat.name;
         this.assignmentService.getAssignments(dictaat.name)
          .then(assignments => this.assignments = assignments )
      }
    })
  }

  public addAssignment(){
      this.assignmentService.ShowModal('add', []).then((assignment) => {
          this.assignments.push(assignment);
      });
  }

    public editAssignment(index: number): void{
      var assignment = new Assignment(this.assignments[index]);
      this.assignmentService.ShowModal('edit', [assignment]).then((assignment) => {
          if(assignment){
            this.assignments[index] = assignment;
          }
      });    
    }

    public Update(assignment: Assignment): void{
        this.assignmentService.update(this.dictaatName, assignment)
        .then((assignment) => {
          this.selectedAssignment = null;
          this.assignments[this.selectedIndex] = assignment;
        })
    }

    public deleteAssignment(index: number): void{
      if(confirm('Are you sure you want to delete the assignment "' + this.assignments[index].title + '"')){
        this.assignmentService.delete(this.dictaatName, this.assignments[index])
          .then((assignment) => {
            this.assignments.splice(index, 1);
          })
      }
    }

    public cancelEdit(): void{
      this.selectedAssignment = null;
    }

}
