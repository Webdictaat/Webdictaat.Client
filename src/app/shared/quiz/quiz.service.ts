import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { wdApi } from '../core/wdapi.service';

import { Quiz } from "./quiz";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class QuizService
{

    constructor(private wdapi: wdApi) {}
    
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
}