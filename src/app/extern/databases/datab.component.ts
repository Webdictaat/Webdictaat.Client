
import { Component, OnInit, Input } from "@angular/core";
import { DatabService, Assignment, Submission } from "./datab.service";

@Component({
    selector: "wd-datab",
    styleUrls: ['./datab.component.css'],
    templateUrl: './datab.component.html' 
})
export class DatabComponent implements OnInit {
        
    @Input()
    public assignmentId: number;

    public assignment: Assignment;
    public submission: Submission;

    constructor(private databService: DatabService){
        this.submission = new Submission();
    }

    ngOnInit(): void {
        this.databService.getAssignment(this.assignmentId)
            .then((assignment: Assignment) => {    
                this.assignment = assignment;
            });
                
    }

    public submit(){
        this.submission.email = "stijn@info.nl";
        this.databService.sendSubmission(this.assignmentId, this.submission)
            .then((submission)=> {
                this.submission = submission;
            })
    }

}