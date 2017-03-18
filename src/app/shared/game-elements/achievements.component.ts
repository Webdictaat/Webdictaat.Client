import { Component, OnInit } from '@angular/core';
import { AchievementService } from '../services/achievement.service';
import { Achievement } from '../models/achievement';
import {AchievementGroup} from "../models/AchievementGroup";


@Component({
    selector: "wd-achievements",
    templateUrl: './achievement.component.html',
    styleUrls: [ './achievement.component.css' ]
})

export class AchievementsComponent implements OnInit {
    abstract;
    achievementgroups: AchievementGroup[];
    grid: boolean = true;

    constructor(
        private achievementService: AchievementService){ }


    public ngOnInit() {
        this.getAchievements();
    }

    getAchievements(): void {
        this.achievementService.getAchievements().then((achievements) => {
            this.achievementgroups = achievements;
            console.log(achievements);
        });
    }

    toggleLayout()
    {
        var button = document.getElementById("layoutbutton");

        if(this.grid)
        {
            this.grid = false;
            button.innerText = "grid";
        }
        else
        {
            this.grid = true;
            button.innerText = "list";
        }
    }

    achievementinfo(achiev: Achievement)
    {

    }

    /*
    createList(): void
    {
        for(let entry of this.achievements)
        {
            if(this.checkStructure(entry.group))
            {
                console.log("meep");
                for(let list of this.achievementlist)
                {
                    if(entry.group == list.name)
                    {
                        list.Achievements.push(entry);
                    }
                }
            }
            else
            {
                console.log("moop");
                var achievarray: Achievement[] = [];
                var a = new AchievementGroup();
                a.name = entry.group;
                a.Achievements = achievarray;
                a.Achievements.push(entry);

                this.achievementlist.push(a);
            }
        }

        console.log(this.achievementlist);
    }

     checkStructure(groupname: String)
     {
     for(let entry of this.achievementlist)
     {
     if(entry.name == groupname) {
     return true;
     }
     }

     return false;

     }
    */
    
}

