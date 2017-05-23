import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef, ElementRef, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseModalComponent } from "../../shared/core/basemodal.service";
import { ImageService } from "../../shared/services/images.service";

@Component({
    selector: "wd-add-image",
    templateUrl: "./add-image.component.html",
})
export class AddImageComponent extends BaseModalComponent implements OnInit   {

    private selectedFile: File;
  
    constructor(
        private imageService: ImageService,
        private route: ActivatedRoute,
        private changeDetector: ChangeDetectorRef,
        private zone: NgZone
    ) {
        super();
    }

    //event
    public ngOnInit(): void {
        super.wdOnInit(this.imageService, this.zone);
    }

    public fileChange(event): void {
        this.selectedFile = event.target.files[0];
    }

    public Add(): void {        
        this.imageService.addImages(this.params['dictaatName'], this.selectedFile)
            .then((imageLocation: string) => {
                this.imageService.CompleteModal( {
                    dictaatName: this.params['dictaatName'],
                    imageLocation: imageLocation
                });
            });
    }

    public Cancel(): void {
        this.imageService.CancelModal();
    }
}

