import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { wdApi } from '../core/wd.service';
import { BaseModalService } from '../core/basemodal.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Quiz, QuizSummary } from "../models/quiz/quiz";
import { Question } from '../models/quiz/question';
import { Attempt } from '../models/quiz/attempt';
import { Poll } from '../models/poll';


@Injectable()
export class PollService extends BaseModalService{


    constructor(private wdapi: wdApi)
    {
        super();
    }

    vote(dictaatName: string, pollId: number, optionId: number): any {

        let url: string = "/dictaten/" + dictaatName + '/poll/' + pollId +'/options/' + optionId + '/votes';

        return this.wdapi.post(url, {})
            .map(res => new Poll(res.json()))
            .toPromise();
    }

    public updatePoll(dictaatName: string, poll: Poll): Promise<Poll> {
        let url: string = "/dictaten/" + dictaatName + '/poll/' + poll.id;;

        return this.wdapi.put(url, poll)
            .toPromise()
            .then(response => {
                return response.json() as Poll
            })
            .catch(() => {
                this.resolveCancel(); //hier nog niet blij mee
                return null as Poll;
            });
    }

      
    addPoll(dictaatName: string, poll: Poll): Promise<Poll> {
        let url: string = "/dictaten/" + dictaatName + '/poll/';;

        return this.wdapi.post(url, poll)
            .toPromise()
            .then(response => {
                return response.json() as Poll
            })
            .catch(() => {
                this.resolveCancel(); //hier nog niet blij mee
                return null as Poll;
            });
    }


    public getPolls(dictaatName: String): Promise<Poll[]> {

        let url: string = "/dictaten/" + dictaatName + '/poll/';;

        return this.wdapi.get(url)
            .map(res => res.json())
            .toPromise();
    }

    public getPoll(dictaatName: String, pollId: number): Promise<Poll> {

        if (!pollId) {
            return new Promise<Poll>((resolve, reject) => {
                reject("Cannot load poll without pollId");
            });
        }
        
        let url: string = "/dictaten/" + dictaatName + '/poll/' + pollId;

        return this.wdapi.get(url)
            .map(res => new Poll(res.json()))
            .toPromise();       
    }

}