import { Injectable } from '@angular/core';
import { AchievementGroup } from "../models/achievementgroup";
import { UserAchievement } from "../models/userachievement";
import { wdApi } from "../core/wd.service";


import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AchievementService {

    constructor(private wdapi: wdApi) { }

    public getDictaatAchievements(dictaatName: string): Promise<AchievementGroup[]> {
        let url: string = "/dictaten/" + dictaatName + "/Achievement";
        return this.wdapi.get(url)
            .toPromise()
            .then(response => {
                return response.json() as AchievementGroup[]
            })
    }

    public getUserAchievements(dictaatName: string, userid: string): Promise<UserAchievement[]> {
        let url: string = "/dictaten/" + dictaatName + "/Achievement/" + userid;
        return this.wdapi.get(url)
            .toPromise()
            .then(response => {
                return response.json() as UserAchievement[]
            })
    }
}