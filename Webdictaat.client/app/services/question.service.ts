import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { wdApi } from '../core/wdapi.service';
import { BaseModalService } from '../core/basemodal.service';

import { Question } from '../models/question';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class QuestionsService extends BaseModalService{

    constructor(private wdapi: wdApi)
    {
        super();
    }

    public addQuestion(dictaatName: String, question: Question): Promise<Question> {

        let url: string = "/dictaten/" + dictaatName + '/questions';

        return this.wdapi.post(url, question)
            .toPromise()
            .then(response => {
                return response.json() as Question
            })
            .catch(() => {
                this.resolveCancel(); //hier nog niet bij mee
            });
    }

    public getQuestion(dictaatName: String, questionId: number): Promise<Question> {

        if (!questionId) {
            return new Promise<Question>((resolve, reject) => {
                reject("Cannot load question without questionId");
            });
        }

        let url: string = "/dictaten/" + dictaatName + '/questions/' + questionId;

        return this.wdapi.get(url)
            .toPromise()
            .then(response => response.json() as Question)
            
    }
}