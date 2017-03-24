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
    private achievementgroups: AchievementGroup[];
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

    public getAllAchievements() {
        var Achievemements = [];

        for(let group of this.achievementgroups)
        {
            for(let achiev of group.Achievements)
            {
                Achievemements.push(achiev);
            }
        }

        return Achievemements;
    }

    achievementinfo(achiev) {
        console.log(achiev);

        $(achiev).on("mouseover", function () {
            $(".achievementinfo").slideDown(300);
        }).on("mouseout", function () {
            $(".achievementinfo").slideUp(300);
        });
    }
}

