
import { Component, OnInit, Input } from "@angular/core";
import { DatabService, DbAssignment, DbSubmission } from "./datab.service";
import { Assignment } from "../../models/assignment";
import { User } from "../../models/user";
import { AccountService, AssignmentService, ConfigService } from "../../services";

@Component({
    selector: "wd-datab",
    styleUrls: ['./datab.component.css'],
    templateUrl: './datab.component.html' 
})
export class DatabComponent implements OnInit {

    @Input()
    public waid: number;

    @Input()
    public daid: number;

    //webdictaat
    public assignment: Assignment;
    public user: User;
    public dictaatName: string;

    //databaas
    public expectedOutput: string;
    public submission: DbSubmission;
    
    public query: string;
    public err: string;

    //helpers
    public show: boolean;

    constructor(private databService: DatabService, 
        private accountService: AccountService, 
        private assignmentService:  AssignmentService,
        private configService: ConfigService){   }

    ngOnInit(): void {
        this.configService.Config.subscribe((config) => {   
            this.dictaatName = config.name;
            this.accountService.User.subscribe((user) => {
                this.assignmentService.getAssignmentDetails(this.dictaatName, this.waid).then(assignment => { 
                    this.assignment = assignment;
                    if(user){
                        this.user = user;
                        this.getAssignment();
                        this.getSubmission();
                    }
                });

                
            })
        });
    }

    private getAssignment(): void {
        this.databService.getAssignment(this.assignment.externalId)
            .then((response: any) => {  
                if(response){   
                    this.expectedOutput = response.expectedOutput;
                }
               
            });  
    }

    private getSubmission(){
        this.databService.getSubmissions(this.assignment.externalId, this.user.email)
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
            this.assignmentService.submitWithToken(this.dictaatName, this.waid, this.submission.assignmentToken)
                .then((assignment) => {
                    this.assignment = assignment 
                });
        }    
    }

    public submit(){   
        this.err = null; //reset err;
        this.submission.message = null;
        this.databService.sendSubmission(this.waid, this.assignment.externalId, this.submission)
            .then((submission)=> {
                this.submission = submission;
                //start polling for 10s
                this.pollticker = 0;
                this.poll();
            }).catch(err => {
                this.err = "We cannot submit your query right now.";
            });  
    }

    private pollticker = 0;

    private poll(){
        this.databService.getSubmissions(this.assignment.externalId, this.user.email).then((submission) => {
            this.submission = submission;
            if(this.submission && this.submission.statusId != 0){           
                this.checkIfComplete();
            }
            else if(this.pollticker != 5){
                //try agian in 2s
                setTimeout(() => {
                    this.pollticker++;
                    this.poll();
                }, 2000);
            }
        })   
    }



}