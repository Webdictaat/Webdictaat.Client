import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Question } from '../models/question';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class QuestionsService {

    constructor(private http: Http) { }

    private dictatenUrl = 'http://localhost:65418/api/dictaten/';

    public isModalVisible: boolean = false;
    private subject: Subject<boolean> = new Subject<boolean>();

    public getIsModalVisible(): Observable<boolean> {
        return this.subject.asObservable();
    }

    public questionAdded: Question;

    private questionAddedSubject: Subject<Question> = new Subject<Question>();

    public getQuestionAdded(): Observable<Question> {
        return this.questionAddedSubject.asObservable();
    }

    public ShowAddQuestionModal(): void{
        this.isModalVisible = true;
        this.subject.next(this.isModalVisible);
    }

    public HideAddQuestionModal(): void {
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    }

    public addQuestion(dictaatName: String, question: Question): Promise<Question> {

        let url: string = this.dictatenUrl + dictaatName + '/questions';

        return this.http.post(url, question  )
            .toPromise()
            .then(response => {
                this.questionAdded = response.json() as Question;
                this.questionAddedSubject.next(this.questionAdded);
                return this.questionAdded;
            }
                
            ).catch(this.handleError);
    }

    public getQuestion(dictaatName: String, questionId: number): Promise<Question> {

        let url: string = this.dictatenUrl + dictaatName + '/questions/' + questionId;

        return this.http.get(url)
            .toPromise()
            .then(response =>
                response.json() as Question
            ).catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}