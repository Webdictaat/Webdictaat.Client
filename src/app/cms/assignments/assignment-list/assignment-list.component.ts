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
      var params = [];
      params['dictaatName'] = this.dictaatService.CurrentDictaat.value.name;
      this.assignmentService.ShowModal(params).then((assignment) => {
          this.assignments.push(assignment);
      });
  }

    public enableEdit(index: number): void{
      this.selectedIndex = index;
      this.selectedAssignment = new Assignment(this.assignments[index]);      
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
