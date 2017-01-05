import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RatingService } from '../services/rating.service';
import { Rating } from '../models/rating';

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

            <div class="bs-callout bs-callout-info row" *ngIf="rating">
                <div class="col-md-3">

                  <h4>{{rating.title}}</h4>
                  <p>{{rating.description}}</p>

                  <div>
                    <img (click)="setEmotion('sad')" [ngClass]="{ 'active' : rating.emotion == 'sad' }" class='emotion' src="http://webdictaat.azurewebsites.net/images/shared/sad.png">
                    <img (click)="setEmotion('happy')" [ngClass]="{ 'active' : rating.emotion == 'happy' }" class='emotion'  src="http://webdictaat.azurewebsites.net/images/shared/happy.png">
                  </div>

                  <button class='btn btn-info btn-raised' *ngIf="rating.emotion" (click)="rate()">Send rating</button>

                </div>

                <div  class='col-md-6 well well-md' *ngIf="rating.emotion">
                    <textarea class="form-control" rows="3" id="textArea"></textarea>
                    <span class="help-block">Would you like to give feedback?</span>
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


    constructor(
        private route: ActivatedRoute,
        private ratingService: RatingService
    ) { }

    public ngOnInit() {

            this.route.params.forEach((params: Params) => {
                this.dictaatName = params['dictaatName'];
                this.ratingService.getRating(this.dictaatName, this.rid)
                    .then(rating => {
                        this.rating = rating;
                    })
                    .catch(reason => this.error = reason);
            });


    }

    public rate(): void {

    }

    public setEmotion(emotion): void {
        this.rating.emotion = emotion;
    }

}

