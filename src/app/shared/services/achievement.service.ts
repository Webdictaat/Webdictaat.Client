import { Injectable } from '@angular/core';
import { Achievement} from "../models/achievement";
import { AchievementGroup } from "../models/achievementgroup";
import {ACHIEVEMENTS} from "../models/mock-achievements";

import { wdApi } from '../core/wdapi.service';
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

    public getAchievement(dictaatName: string, id: number): Promise<Achievement> {
        let url: string = "/dictaten/" + dictaatName + "/Achievement/" + id;
        return this.wdapi.get(url)
            .toPromise()
            .then(response =>
                response.json() as Achievementgroup
            );
    }
}