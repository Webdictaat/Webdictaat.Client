import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import { BaseModalComponent } from "../../../shared/core/basemodal.service";
import { AssignmentService } from "../../../shared/services/assignment.service";
import { DictaatService } from "../../../shared/services/dictaat.service";
import { Assignment } from "../../../shared/models/assignment";

@Component({
  selector: 'wd-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {

  public assignment: Assignment;
  private dictaatName: string;

  @Output()
  public onFinished = new EventEmitter();

  constructor(
      private assignmentService: AssignmentService,
      private dictaatService: DictaatService
  ){}

    public ngOnInit(): void {
        this.assignment = new  Assignment();
        this.dictaatService.CurrentDictaat.subscribe((dictaat)=> { if(dictaat) { this.dictaatName = dictaat.name } }); 
    }

    public Cancel()
    {
        this.onFinished.emit();
    }

   public Add(): void {

        this.assignmentService.addAssignment(this.dictaatName, this.assignment)
            .then(assignment => {
                this.onFinished.emit(assignment);
            }, (error) => {
                this.onFinished.emit();
                alert("Something went wrong!");
            });
    }
}
