import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RatingService } from '../services/rating.service';
import { AccountService } from '../services/account.service';
import { Rating, Rate } from '../models/rating';

@Component({
    selector: "wd-rating",
    styles: [`
        .emotion{
             width: 35px; cursor: pointer;
             -webkit-transition: all 0.4s; /* Safari */
            transition: all 0.4s;
            margin:4px;
        }
        .emotion.active { 
            transform: scale(1.3, 1.3); 
        }
    `],
    template: `
    <div class='wd-component'>

        <div *ngIf="error" class="alert alert-danger">
            <p>{{error}}</p>
        </div>

        <div class="bs-callout bs-callout-info" *ngIf="rating" >
               
            <h4>{{rating.title}}</h4>
            <p>{{rating.description}}</p>

            <div *ngIf="!isAuth">
                 <button class='btn btn-info btn-raised' (click)="login()">Login to give feedback</button>
            </div>

            <div *ngIf="isAuth">

                <div *ngIf="!rating.myRate">
                    <div>
                        <img (click)="setEmotion('sad')" [ngClass]="{ 'active' : rate.emotion == 'sad' }" class='emotion' src="http://webdictaat.azurewebsites.net/images/shared/sad.png">
                        <img (click)="setEmotion('happy')" [ngClass]="{ 'active' : rate.emotion == 'happy' }" class='emotion'  src="http://webdictaat.azurewebsites.net/images/shared/happy.png">
                    </div>

                    <div *ngIf="rate.emotion">
                        <textarea class="form-control" rows="3" [(ngModel)]='rate.feedback' id="textArea"></textarea>
                        <span class="help-block">Would you like to give feedback?</span>
                        <button class='btn btn-info btn-raised' (click)="sendRate()">Send rating</button>
                    </div>
                </div>

                <div *ngIf="rating.myRate">
                    <p>Thank you for the feedback!</p>
                    <p *ngIf="rating.myRate.feedback"> 
                        <img width="30px" *ngIf="rating.myRate.emotion == 0" src="http://webdictaat.azurewebsites.net/images/shared/sad.png">
                        <img width="30px" *ngIf="rating.myRate.emotion == 1" src="http://webdictaat.azurewebsites.net/images/shared/happy.png">
                        - "{{rating.myRate.feedback}}"</p>
                </div>


            </div>

            

        </div>
    </div>
    `
})
export class RatingComponent implements OnInit {

    private dictaatName: string;
    private error: string;

    //question id
    @Input()
    public rid: number; 

    public rating: Rating;
    public rate: Rate = new Rate();
    public isAuth: boolean;

    constructor(
        private route: ActivatedRoute,
        private ratingService: RatingService,
        private accountService: AccountService
    ) {}

    public ngOnInit() {

        this.accountService.getUser()
            .subscribe(user => {
                this.isAuth = user != null
            });

        //Krijg initiele waarde van observable niet :(
        this.accountService.update();

        this.route.params.forEach((params: Params) => {
            this.dictaatName = params['dictaatName'];
            this.ratingService.getRating(this.dictaatName, this.rid)
                .then(rating => {
                    this.rating = rating;
                })
                .catch(reason => this.error = reason);
        });


    }

    public login() {
        this.accountService.Login();
    }


    public sendRate(): void {
        this.ratingService.SendRate(this.dictaatName, this.rating.id, this.rate)
            .then((rate) => this.rating.myRate = rate);
    }

    public setEmotion(emotion): void {
        this.rate.emotion = emotion;
    }

}

