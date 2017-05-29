import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { wdApi } from "../../core/wd.service";

export class Leaderboard{

    public ranks: Rank[]
    
}

export class Rank {
    public rank: number;
    public name: string;
    public points: number;
}


@Injectable()
export class LeaderboardService{

    constructor(private wdapi: wdApi)
    {

    }

    public getLeaderboard(dictaatName: string){

    }
}