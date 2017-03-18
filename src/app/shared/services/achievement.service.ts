import { Injectable } from '@angular/core';
import { Achievement} from "../models/achievement";
import { AchievementGroup } from "../models/achievementgroup";
import {ACHIEVEMENTS} from "../models/mock-achievements";

@Injectable()
export class AchievementService {
    getAchievements(): Promise<AchievementGroup[]> {
        return Promise.resolve(ACHIEVEMENTS);
    }

    getAchievementsSlowly(): Promise<AchievementGroup[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getAchievements()), 2000);
        });
    }

    getAchievement(id: number): Promise<AchievementGroup> {
        return this.getAchievements()
            .then(achievement => achievement.find(achievement => achievement.id === id));
    }
}