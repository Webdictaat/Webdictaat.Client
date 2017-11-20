import { Component, OnInit, Input, Output } from '@angular/core';
import { AssignmentService } from "../../services/assignment.service";
import { Assignment } from "../../models/assignment";
import { DictaatService } from "../../services/dictaat.service";
import { ActivatedRoute } from "@angular/router/router";
import { ConfigService } from "../../services/config.service";
import { EventEmitter } from "events";
import { AccountService } from '../../services/account.service';
import { User } from '../../models/user';

@Component({
  selector: 'wd-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  dictaatName: any;

  private user: User;
  public assignment: Assignment;

  @Input()
  public aid: number;


  constructor(
    private accountService: AccountService, 
    private dictaatService: DictaatService,
    private assignmentService: AssignmentService,
    private configService: ConfigService ) { }

  ngOnInit() {
    this.configService.Config.subscribe((config) => {
      this.dictaatName = config ? config.name : null;

      if(this.dictaatName)
          this.assignmentService.getAssignmentDetails(config.name, this.aid).then(ad => {
            this.assignment = ad;
          });
    });

    this.accountService.User.subscribe(user => this.user = user);
  }

  public submit() : any {
    this.assignment.state = 1;
    this.assignmentService.submit(this.dictaatName, this.aid, this.user.id)
      .then(s => this.assignment.mySubmission = s)
      .catch(s => this.assignment.state = 0);
  }
}
