import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RatingService } from '../services/rating.service';
import { AccountService } from '../services/account.service';
import { Rating, Rate } from '../models/rating';

@Component({
    selector: "wd-spinner",
    styleUrls: ['./spinner.component.css'],
    template: `
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
        <div class="subtitle">{{subtitle ? subtitle : 'loading content'}}</div>
    
    `
})
export class SpinnerComponent implements OnInit {

    @Input()
    public subtitle: string;

    constructor(

    ) {}

    public ngOnInit() {}

 

}

