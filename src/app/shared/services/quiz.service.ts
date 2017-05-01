﻿import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { wdApi } from '../core/wdapi.service';
import { BaseModalService } from '../core/basemodal.service';

import { Question } from '../models/question';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Quiz, Attempt } from "../quiz/quiz";


@Injectable()
export class QuizService extends BaseModalService{

    constructor(private wdapi: wdApi)
    {
        super();
    }

    public addQuiz(dictaatName: String, quiz: Quiz): Promise<Quiz> {

        let url: string = "/dictaten/" + dictaatName + '/quiz';

        return this.wdapi.post(url, quiz)
            .toPromise()
            .then(response => {
                return response.json() as Quiz
            })
            .catch(() => {
                this.resolveCancel(); //hier nog niet bij mee
            });
    }

    public getQuiz(dictaatName: String, quizId: number): Promise<Quiz> {

        if (!quizId) {
            return new Promise<Quiz>((resolve, reject) => {
                reject("Cannot load quiz without quizId");
            });
        }
        
        //for testing purposes
        dictaatName =  "test";

        let url: string = "/dictaten/" + dictaatName + '/quiz/' + quizId;

        return this.wdapi.get(url)
            .toPromise()
            .then(response => response.json() as Quiz)
            
    }

    public submitAnswers(dictaatName: string, quizId: number, givenAnswers: number[]) : Promise<Attempt> {
         let url: string = "/dictaten/" + dictaatName + '/quiz/' + quizId + '/attempts';
         return this.wdapi.post(url, { GivenAnswers: givenAnswers })
            .toPromise()
            .then(response => response.json() as Attempt)
    }
}