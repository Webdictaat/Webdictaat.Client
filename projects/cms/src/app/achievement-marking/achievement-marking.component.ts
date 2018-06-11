import { Component, OnInit } from '@angular/core';
import {AchievementGroup} from "core/lib/models/achievementgroup";
import {Achievement} from "core/lib/models/achievement";
import {UserAchievement} from "core/lib/models/userachievement";
import {AchievementService} from "core/lib/services/achievement.service";

@Component({
    selector: "wd-achievement-marking",
    templateUrl: './achievement-marking.component.html',
    styleUrls: [ './achievement-marking.component.css' ]
})

export class AchievementMarkingComponent implements OnInit {

    private achievementgroups: AchievementGroup[];
    private achievements: Achievement[];
    private userAchievements: UserAchievement[];
    private users: Array<string>;

    constructor(
        private achievementService: AchievementService){ }


    public ngOnInit() {
        this.achievementgroups = [];
        this.achievements = [];
        this.userAchievements = [];
        this.users = ["mich", "jaap jansen hendriks van ottoloo" , "hans"];
        this.getAchievements();
    }

    getAchievements(): void {
        this.achievementService.getDictaatAchievements("meep").then((achievements) => {
            this.achievementgroups = achievements;
            this.getAllAchievements();

            this.achievementService.getUserAchievements("meep", "mich").then((userachievements) => {
                this.userAchievements = userachievements;
            });
        });


    }

    public getAllAchievements() {
        for(let group of this.achievementgroups)
        {
            for(let achiev of group.achievements)
            {
                this.achievements.push(achiev);
            }
        }
    }

    public checkCompleted(userid, achievid)
    {
        for(let achiev of this.userAchievements)
        {
            if(achiev.userId == userid && achiev.achievementId == achievid)
            {
                return true;
            }
        }

        return false;
    }
}