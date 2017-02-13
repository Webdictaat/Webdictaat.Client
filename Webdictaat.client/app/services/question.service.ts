import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { wdApi } from '../core/wdapi.service';

import { Question } from '../models/question';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class QuestionsService {

    constructor(private wdapi: wdApi) { }


    public isModalVisible: boolean = false;
    private subject: Subject<boolean> = new Subject<boolean>();

    public getIsModalVisible(): Observable<boolean> {
        return this.subject.asObservable();
    }

    private resolveAddQuestion;
    private resolveCancel;

    public ShowModal(): Promise<Question> {
        this.isModalVisible = true;
        this.subject.next(this.isModalVisible);
        return new Promise<Question>((resolve, reject) => {
            this.resolveAddQuestion = resolve;
            this.resolveCancel = reject;
        });
    }

    public CancelModal(): void {
        this.resolveCancel();
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    }

    public CompleteModal(question: Question) {
        this.resolveAddQuestion(question);
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
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