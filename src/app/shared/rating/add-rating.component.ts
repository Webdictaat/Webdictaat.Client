import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RatingService } from '../services/rating.service';
import { DictaatService } from '../services/dictaat.service';


import { Rating } from '../models/rating';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "wd-add-rating",
    templateUrl: "./add-rating.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddRatingComponent implements OnInit   {

    private dictaatName: string;

    public isModalVisible: boolean;
    public rating: Rating;
  

    constructor(
        private ratingService: RatingService,
        private route: ActivatedRoute,
        private changeDetector: ChangeDetectorRef
    ) {}

    //event
    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.dictaatName = params['dictaatName'];
        });

        this.ratingService.getIsModalVisible().subscribe((isModalVisible: boolean) => {
            this.isModalVisible = isModalVisible;
            this.rating = new Rating();  
            this.changeDetector.markForCheck(); // marks path
        });
    }

    public Add(): void {

        this.ratingService.addRating(this.dictaatName, this.rating)
            .then((question: Rating) => {
                this.ratingService.CompleteModal(question);
            });
    }

    public Cancel(): void {
        this.ratingService.CancelModal();
    }
}

