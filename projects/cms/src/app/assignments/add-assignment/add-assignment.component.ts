import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import { BaseModalComponent } from "core/lib/core/basemodal.service";
import { AssignmentService } from "core/lib/services/assignment.service";
import { DictaatService } from "core/lib/services/dictaat.service";
import { Assignment } from "core/lib/models/assignment";

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
