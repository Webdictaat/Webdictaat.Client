import { Component, OnInit, NgZone } from '@angular/core';
import { BaseModalComponent } from "../../../shared/core/basemodal.service";
import { AssignmentService } from "../../../shared/services/assignment.service";
import { DictaatService } from "../../../shared/services/dictaat.service";
import { Assignment } from "../../../shared/models/assignment";

@Component({
  selector: 'wd-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent extends BaseModalComponent {

  public assignment: Assignment;
  private dictaatName: string;

  constructor(
      private assignmentService: AssignmentService,
      private dictaatService: DictaatService,
      private zone: NgZone
  ){
    super(); 
    
  }

    public ngOnInit(): void {
        this.assignment = new  Assignment();
        super.wdOnInit(this.assignmentService, this.zone);
        this.dictaatService.CurrentDictaat.subscribe((dictaat)=> { if(dictaat) { 
            debugger;
            this.dictaatName = dictaat.name } }); 
    }

   public add(): void {

        this.assignmentService.addAssignment(this.dictaatName, this.assignment)
            .then(assignment => {
                this.assignmentService.CompleteModal(assignment);
            }, (error) => {
                this.assignmentService.CancelModal();
                alert("Something went wrong!");
            });
    }
}
