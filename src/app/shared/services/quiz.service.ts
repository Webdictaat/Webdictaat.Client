import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { wdApi } from '../core/wd.service';
import { BaseModalService } from '../core/basemodal.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Quiz, Attempt, Question, QuizSummary } from "../models/quiz";


@Injectable()
export class QuizService extends BaseModalService{

    constructor(private wdapi: wdApi)
    {
        super();
    }

     public getQuizes(dictaatName: String): Promise<QuizSummary[]> {
       
        let url: string = "/dictaten/" + dictaatName + '/quiz';

        return this.wdapi.get(url)
            .toPromise()
            .then(response => {
                return response.json() as QuizSummary[]
            })
            
    }

    public update(dictaatName: String, quiz: Quiz): Promise<Quiz> {
        let url: string = "/dictaten/" + dictaatName + '/quiz/' + quiz.id ;

        return this.wdapi.put(url, quiz)
            .toPromise()
            .then(response => {
                return response.json() as Quiz
            });
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
            .then(response => {
                return new Quiz(response.json());
            })
            
    }

    public submitAnswers(dictaatName: string, quizId: number, givenAnswers: number[]) : Promise<Attempt> {
         let url: string = "/dictaten/" + dictaatName + '/quiz/' + quizId + '/attempts';
         return this.wdapi.post(url, { GivenAnswers: givenAnswers })
            .toPromise()
            .then(response => response.json() as Attempt)
    }

    public removeQuestion(dictaatName: string, quizId: number, question: Question){
         let url: string = "/dictaten/" + dictaatName + '/quiz/' + quizId + '/questions/' + question.id;
         return this.wdapi.delete(url)
            .toPromise()
            .then(response => response.json() as Question)
    }

    public updateQuestion(dictaatName: string, quizId: number, question: Question){
         let url: string = "/dictaten/" + dictaatName + '/quiz/' + quizId + '/questions/' + question.id;
         return this.wdapi.put(url, question)
            .toPromise()
            .then(response => response.json() as Question)
    }
}