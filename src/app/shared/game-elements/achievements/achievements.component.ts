import { Component, OnInit } from '@angular/core';
import { AchievementService } from '../../services/achievement.service';
import { Achievement } from '../..//models/achievement';
import {AchievementGroup} from "../../models/AchievementGroup";
import { UserAchievement } from "../../models/userachievement";
import { ConfigService } from "../../services/config.service";


@Component({
    selector: "wd-achievements",
    templateUrl: './achievements.component.html',
    styleUrls: [ './achievements.component.css' ]
})

export class AchievementsComponent implements OnInit {
    abstract;
    private achievementgroups: AchievementGroup[];
    private achievements: Achievement[];
    grid: boolean = true;

    

    constructor(
        private achievementService: AchievementService, private configService: ConfigService){ }


    public ngOnInit() {
        this.configService.Config.subscribe((config) => {
            if(config){
                this.achievementService.getDictaatAchievements(config.name).then((achievements) => {
                    this.achievementgroups = achievements ? achievements : [];
                    this.getAllAchievements();
                });
            }
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
}

