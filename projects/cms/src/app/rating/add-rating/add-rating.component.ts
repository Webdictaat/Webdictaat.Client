import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseModalComponent } from "core/lib/core/basemodal.service";
import { Rating } from "core/lib/models/rating";
import { RatingService } from "core/lib/services/rating.service";

@Component({
    selector: "wd-add-rating",
    templateUrl: "./add-rating.component.html"
})
export class AddRatingComponent extends BaseModalComponent implements OnInit   {

    public rating: Rating;
  
    constructor(
        private ratingService: RatingService,
        private route: ActivatedRoute,
        private changeDetector: ChangeDetectorRef,
        private zone: NgZone
    ) {
        super();
    }

    //event
    public ngOnInit(): void {
      this.wdOnInit(this.ratingService, this.zone);  
      this.resetRating();
    }

    public Add(): void {
        this.ratingService.addRating(this.params['dictaatName'], this.rating)
            .then((question: Rating) => {
                this.ratingService.CompleteModal(question);
            });
    }

    private resetRating(){
        this.rating = new Rating();  
    }

    public Cancel(): void {
        this.ratingService.CancelModal();
        this.resetRating();
    }
}

