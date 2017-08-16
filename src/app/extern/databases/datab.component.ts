
import { Component, OnInit, Input } from "@angular/core";
import { DatabService, DbAssignment, DbSubmission } from "./datab.service";
import { AccountService } from "../../shared/services/account.service";
import { User } from "../../shared/models/user";
import { AssignmentService } from "../../shared/services/assignment.service";
import { Assignment } from "../../shared/models/assignment";

@Component({
    selector: "wd-datab",
    styleUrls: ['./datab.component.css'],
    templateUrl: './datab.component.html' 
})
export class DatabComponent implements OnInit {
    

    assignment: Assignment;

    @Input()
    public waid: number;

    @Input()
    public daid: number;
    public submission: DbSubmission;
    private user: User;
    public query: string;

    constructor(private databService: DatabService, private accountService: AccountService, private assignmentService:  AssignmentService){   }

    ngOnInit(): void {

        
        this.accountService.User.subscribe((user) => {
            this.assignmentService.getAssignmentDetails("null", this.waid).then(assignment => { 
                this.assignment = assignment;

                if(user){
                    this.user = user;
                    this.getSubmission();
                }
            });

            
        })
    }

    private getSubmission(){
        this.databService.getSubmissions(this.daid, this.user.email)
            .then((submission: DbSubmission) => {  
                if(submission){
                    this.submission = submission;
                    this.checkIfComplete();
                }
                else{
                    this.submission = new DbSubmission();
                    this.submission.email = this.user.email;
                }
            });  
    }

    private checkIfComplete(){
        if(this.submission.assignmentToken && !this.assignment.mySubmission){
            this.assignmentService.submitWithToken(this.waid, this.submission.assignmentToken)
                .then((assignment) => {
                    this.assignment = assignment 
                });
        }    
    }

    public submit(){   
        this.submission.message = null;
        this.databService.sendSubmission(this.waid, this.daid, this.submission)
            .then((submission)=> {
                this.submission = submission;
                //start polling for 10s
                this.pollticker = 0;
                this.poll();
            })
    }

    private pollticker = 0;

    private poll(){
        this.databService.getSubmissions(this.daid, this.user.email).then((submission) => {
            this.submission = submission;
            if(this.submission.statusId != 0){           
                this.checkIfComplete();
            }
            else if(this.pollticker != 5){
                console.log('checkiing for update' + this.pollticker);
                //try agian in 2s
                setTimeout(() => {
                    this.pollticker++;
                    this.poll();
                }, 2000);
            }
        })   
    }



}