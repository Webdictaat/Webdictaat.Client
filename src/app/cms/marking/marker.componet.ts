import { Component, OnInit, Input } from '@angular/core';
import { Dictaat } from "../../shared/models/dictaat";
import { DictaatService } from "../../shared/services/dictaat.service";
import { AssignmentService } from "../../shared/services/assignment.service";

@Component({
  selector: 'wd-marker',
  template: `
    <div class="toggler" (click)="toggle()" [ngClass]="{'toggle': submission}">

    </div>
  `,
  styles: [`
    .toggler{
        border:1px solid gray;
        margin:1px;
        width:30px;
        height:30px;
        cursor:pointer;
    }

    .toggle { background-color:  #43a047}
  `]
})
export class MarkerComponent {
    
    constructor(private assignmentService: AssignmentService){}

    ngOnChanges(): void {

    }

    @Input()
    public uid: string;

    @Input() 
    public aid: number;

    @Input() 
    public submission: any;

    public toggle(): void{
        if(!this.submission){
            this.submission = {};
            this.assignmentService.submit(this.aid, this.uid);
        }
        else{
            this.submission = null;
            this.assignmentService.unsubmit(this.aid, this.uid);
        }
        
    }

}