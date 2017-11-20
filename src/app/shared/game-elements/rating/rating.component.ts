import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RatingService } from '../../services/rating.service';
import { AccountService } from '../../services/account.service';
import { Rating, Rate } from '../../models/rating';

@Component({
    selector: "wd-rating",
    styleUrls: ['./rating.component.css'],
    templateUrl: './rating.component.html' 
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

        this.accountService.User.subscribe(user => { this.isAuth = user != null; });
        
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
            .then((rating) => {
                this.rating = rating;
                this.rate = null;
            });
    }

    public setEmotion(emotion): void {
        if(this.rate.emotion == emotion){
            this.rate.emotion = null;
        }
        else{
            this.rate.emotion = emotion;
        }
        
    }

}

