import { Component, OnInit, Input } from '@angular/core';
import { Dictaat } from "../../shared/models/dictaat";
import { DictaatService } from "../../shared/services/dictaat.service";
import { AssignmentService } from "../../shared/services/assignment.service";

@Component({
  selector: 'wd-marker',
  template: `
    <div class="toggler" (click)="toggle()" [ngClass]="'state-'+state">

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
    
    .state-1 { background-color:  #f0ad4e}
    .state-2 { background-color:  #43a047}
  `]
})
export class MarkerComponent {
    
    constructor(private assignmentService: AssignmentService){}

  

    @Input()
    public dictaatName: string; 

    @Input()
    public uid: string;

    @Input() 
    public aid: number;

    @Input() 
    public submission: any;

    public state : number;

    ngOnChanges(): void {
        this.setState();
    }

    private setState(){
        if(!this.submission)
            return this.state = 0;

        this.state = this.submission.accepted ? 2 : 1;
    }

    private nextState(){

    }

    public toggle(): void{
        switch(this.state){
            case 0:   this.assignmentService.submit(this.dictaatName, this.aid, this.uid); this.state = 2; break;
            case 1:   this.assignmentService.submit(this.dictaatName, this.aid, this.uid); this.state = 2; break;
            case 2:   this.assignmentService.unsubmit(this.dictaatName, this.aid, this.uid); this.state = 0; break;
            default: this.state = 0; break;
        }
    }

}