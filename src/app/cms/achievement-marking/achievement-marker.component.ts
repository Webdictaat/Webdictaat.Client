import { Component, Input } from '@angular/core';
import {AchievementService} from "../../shared/services/achievement.service";

@Component({
    selector: 'wd-achievementmarker',
    template: `
    <div class="toggler" (click)="toggle()" [ngClass]="{'toggle': isSubmitted}"></div>
  `,
    styles: [`
    .toggler{
        border:1px solid gray;
        margin: 5px;
        width:50px;
        height:50px;
        cursor:pointer;
    }

    .toggle { background-color:  #43a047}
  `]
})
export class AchievementMarkerComponent {

    constructor(private achievementService: AchievementService){}

    ngOnChanges(): void {

    }

    @Input()
    public uid: string;

    @Input()
    public aid: number;

    @Input()
    public isSubmitted: any;

    public toggle(): void{
        if(!this.isSubmitted){
            this.isSubmitted = true
            this.achievementService.AddUserAchievement("meep", this.aid, this.uid)
        }
        else{
            this.isSubmitted = false;
            this.achievementService.DeleteUserAchievement("meep", this.aid, this.uid);
        }

    }

}