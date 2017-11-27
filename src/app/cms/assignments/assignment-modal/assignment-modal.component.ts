import { Component, OnInit, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { BaseModalComponent } from '../../../shared/core/basemodal.service';
import { AssignmentService } from '../../../shared/services/assignment.service';
import { DictaatService } from '../../../shared/services/dictaat.service';
import { Assignment } from '../../../shared/models/assignment';

@Component({
  selector: 'wd-assignment-modal',
  templateUrl: './assignment-modal.component.html',
  styleUrls: ['./assignment-modal.component.css']
})
export class AssignmentModalComponent extends BaseModalComponent implements OnInit {
 


  private dictaatName: string;
  public assignments: Assignment[];

  constructor(
    private assignmentService: AssignmentService,
    private dictaatService: DictaatService,
    private zone: NgZone
){
  super(); 
  
}

  ngOnInit() {
    super.wdOnInit(this.assignmentService, this.zone);

    this.dictaatService.CurrentDictaat.subscribe((dictaat)=> { 
      if(dictaat) { this.dictaatName = dictaat.name } 

      //check for modal changes to update assignment list
      this.assignmentService.modalEvent.subscribe((event) => {
          if(event.isVisible && event.modalType == 'choose')
          {
            this.assignmentService.getAssignments(this.dictaatName)
              .then((assignments) => this.assignments = assignments);
          }
      })
    });     
    
    
  }

  public completeModal(assignment: Assignment){
    if(assignment)
      this.assignmentService.CompleteModal(assignment);
    else
      this.assignmentService.CancelModal();
  }

  

}
