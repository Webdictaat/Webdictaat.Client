import { Component, OnInit, Input, Output } from '@angular/core';
import { AssignmentService } from "../../services/assignment.service";
import { Assignment } from "../../models/assignment";
import { DictaatService } from "../../services/dictaat.service";
import { ActivatedRoute } from "@angular/router/router";
import { ConfigService } from "../../services/config.service";
import { EventEmitter } from "events";

@Component({
  selector: 'wd-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  
  public assignment: Assignment;

  @Input()
  public aid: number;


  constructor(
    private dictaatService: DictaatService,
    private assignmentService: AssignmentService,
    private config: ConfigService ) { }

  ngOnInit() {
    this.config.Config.subscribe((config) => {
      if(config)
          this.assignmentService.getAssignmentDetails(config.name, this.aid).then(ad => {
            this.assignment = ad
          });
    });
  }
}
