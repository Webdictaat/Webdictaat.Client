
import { Component, OnInit, Input } from "@angular/core";
import { DatabService, Assignment } from "./datab.service";

@Component({
    selector: "wd-datab",
    styleUrls: ['./datab.component.css'],
    templateUrl: './datab.component.html' 
})
export class DatabComponent implements OnInit {
        
    @Input()
    public assignmentId: number;

    public assignment: Assignment;

    constructor(private databService: DatabService){
        
    }

    ngOnInit(): void {
        this.databService.getAssignment(this.assignmentId)
            .then((assignment: Assignment) => {    
                this.assignment = assignment;
            });
                
    }

}