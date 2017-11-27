import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Assignment } from "../../../shared/models/assignment";
import { AssignmentService } from '../../../shared/services/assignment.service';
import { DictaatService } from '../../../shared/services/dictaat.service';

@Component({
  selector: 'wd-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {

  @Input()
  public assignment: Assignment;

  @Output()
  public onFinished = new EventEmitter();

  private dictaatName: string;

  constructor(
    private assignmentService: AssignmentService,
    private dictaatService: DictaatService
  ){}

  ngOnInit() {
    this.dictaatService.CurrentDictaat.subscribe((dictaat)=> { if(dictaat) { this.dictaatName = dictaat.name } });     
  }

  public Save(){
      this.assignmentService.update(this.dictaatName, this.assignment)
        .then((assignment) => this.onFinished.emit(assignment));
  }

  public Cancel(){
      this.onFinished.emit();
  }

}
