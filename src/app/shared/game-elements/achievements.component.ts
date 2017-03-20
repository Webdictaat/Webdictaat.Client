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

    achievementinfo(achiev: Achievement) {
        $(".achievement").on("mouseover", function () {
            $(".achievementinfo").slideDown(300);
        }).on("mouseout", function () {
            $(".achievementinfo").slideUp(300);
        });
    }
}

