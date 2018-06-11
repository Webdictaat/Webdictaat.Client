import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject , Observable } from 'rxjs';

import { wdApi } from '../core/wd.service';
import { BaseModalService } from '../core/basemodal.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Quiz, QuizSummary } from "../models/quiz/quiz";
import { Question } from '../models/quiz/question';
import { Attempt } from '../models/quiz/attempt';


@Injectable()
export class QuizService extends BaseModalService{

    constructor(private wdapi: wdApi)
    {
        super();
    }

    public saveTemporary(quiz: Quiz)
    {
        var copy = Object.assign({}, quiz);
        copy.status = "temporary";
        localStorage.setItem("quiz:" + copy.id, JSON.stringify(copy));
    }

    public getTemporary(qid: number){
        var storage = localStorage.getItem("quiz:" + qid);
        var quiz = storage ? JSON.parse(storage) : null;
        return quiz ? new Quiz(quiz) : null;
    }

    public deleteTemporary(qid: number){
        localStorage.removeItem("quiz:" + qid);
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
                return null as Quiz;
            });
    }

    public getQuiz(dictaatName: String, quizId: number): Promise<Quiz> {

        if (!quizId) {
            return new Promise<Quiz>((resolve, reject) => {
                reject("Cannot load quiz without quizId");
            });
        }

        let url: string = "/dictaten/" + dictaatName + '/quiz/' + quizId;

        return this.wdapi.get(url)
            .toPromise()
            .then(response => {
                return new Quiz(response.json());
            })
            
    }

    public submitAnswers(dictaatName: string, quizId: number, givenAnswers: any[]) : Promise<Quiz> {
         let url: string = "/dictaten/" + dictaatName + '/quiz/' + quizId + '/attempts';
         return this.wdapi.post(url,  givenAnswers )
            .toPromise()
            .then(response => new Quiz(response.json()))
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