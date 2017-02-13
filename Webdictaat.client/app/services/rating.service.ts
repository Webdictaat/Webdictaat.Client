﻿import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
//Nodig om een object om te toveren in een promise.
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { wdApi } from '../core/wdapi.service';

import { Rating, Rate } from '../models/rating';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class RatingService {

    constructor(private wdapi: wdApi) { }

    public isModalVisible: boolean = false;
    private subject: Subject<boolean> = new Subject<boolean>();

    public getIsModalVisible(): Observable<boolean> {
        return this.subject.asObservable();
    }

    private resolveAddRating;
    private resolveCancel;

    public ShowModal(): Promise<Rating> {
        this.isModalVisible = true;
        this.subject.next(this.isModalVisible);
        return new Promise<Rating>((resolve, reject) => {
            this.resolveAddRating = resolve;
            this.resolveCancel = reject;
        });
    }

    public CancelModal(): void {
        this.resolveCancel();
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    }

    public CompleteModal(rating: Rating) {
        this.resolveAddRating(rating);
        this.isModalVisible = false;
        this.subject.next(this.isModalVisible);
    }

    public addRating(dictaatName: String, rating: Rating): Promise<Rating> {

        let url: string = "/dictaten/" + dictaatName + '/rating';

        return this.wdapi.post(url, rating)
            .toPromise()
            .then(response => {
                return response.json() as Rating
            })
            .catch(() => {
                this.resolveCancel(); //hier nog niet bij mee
                return this.handleError;
            });
    }

    public SendRate(dictaatName: String, ratingId: number, rate: Rate): Promise<Rate> {

        let url: string = "/dictaten/" + dictaatName + '/rating/' + ratingId + '/rates';

        return this.wdapi.post(url, rate)
            .toPromise()
            .then(response => {
                return response.json() as Rate
            })
            .catch(() => {
                return this.handleError;
            });
    }

    public getRating(dictaatName: String, ratingId: number): Promise<Rating> {

        if (!ratingId) {
            return new Promise<Rating>((resolve, reject) => {
                reject("Cannot load rating without ratingId");
            });
        }

        let url: string = "/dictaten/" + dictaatName + '/rating/' + ratingId;

        return this.wdapi.get(url)
            .toPromise()
            .then(response => response.json() as Rating);

    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}