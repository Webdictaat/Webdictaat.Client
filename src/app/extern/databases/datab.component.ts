
import { Component, OnInit, Input } from "@angular/core";
import { DatabService, DbAssignment, DbSubmission } from "./datab.service";

@Component({
    selector: "wd-datab",
    styleUrls: ['./datab.component.css'],
    templateUrl: './datab.component.html' 
})
export class DatabComponent implements OnInit {
        
    @Input()
    public assignmentId: number;

    public assignment: DbAssignment;
    public submission: DbSubmission;

    private userId = "5b9cb491-ab41-4c54-b3b7-ae6d08491b46";

    constructor(private databService: DatabService){
        this.submission = new DbSubmission();
    }

    ngOnInit(): void {
        this.databService.getAssignment(this.assignmentId, this.userId)
            .then((assignment: DbAssignment) => {    
                this.assignment = assignment;

                if(assignment.external){
                    this.submission = assignment.external;
                }
            });
                
    }

    public submit(){
        this.submission.userId = this.userId;
        this.databService.sendSubmission(this.assignmentId, this.submission)
            .then((submission)=> {
                this.assignment.external = submission;
                this.submission = submission;
            })
    }

}