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
    loaded: boolean = false;

    constructor(
        private achievementService: AchievementService){ }


    public ngOnInit() {
        this.achievementgroups = [];
        this.getAchievements();
    }

    getAchievements(): void {
        this.achievementService.getDictaatAchievements("meep").then((achievements) => {
            this.achievementgroups = achievements;
            this.loaded = true;
        });
    }

    public getAllAchievements() {
        var Achievements = [];
        for(let group of this.achievementgroups)
        {
            for(let achiev of group.achievements)
            {
                Achievements.push(achiev);
            }
        }
        return Achievements;
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

