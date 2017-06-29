import { Component, OnInit } from '@angular/core';
import { AchievementService } from '../services/achievement.service';
import { Achievement } from '../models/achievement';
import {AchievementGroup} from "../models/AchievementGroup";
import { UserAchievement } from "../models/userachievement";


@Component({
    selector: "wd-achievements",
    templateUrl: './achievement.component.html',
    styleUrls: [ './achievement.component.css' ]
})

export class AchievementsComponent implements OnInit {
    abstract;
    private achievementgroups: AchievementGroup[];
    private achievements: Achievement[];
    private userAchievements: UserAchievement[];
    grid: boolean = true;

    constructor(
        private achievementService: AchievementService){ }


    public ngOnInit() {
        this.achievementgroups = [];
        this.achievements = [];
        this.userAchievements = [];
        this.getAchievements();
    }

    getAchievements(): void {
        this.achievementService.getDictaatAchievements("meep").then((achievements) => {
            this.achievementgroups = achievements;
            this.getAllAchievements();
            this.checkCompleted();
        });

        this.achievementService.getUserAchievements("meep", "mich").then((userachievements) => {
            this.userAchievements = userachievements;
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

    private checkCompleted() {
        for(let userachiev of this.userAchievements)
        {
            for(let achiev of this.achievements)
            {
                if(userachiev.achievement.id == achiev.id)
                {
                    achiev.completed = true;
                    break;
                }
            }
        }
    }
}

