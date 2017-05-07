import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef, ElementRef, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ImageService } from '../services/images.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "wd-add-image",
    templateUrl: "./add-image.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddImageComponent implements OnInit   {

    private dictaatName: string;

    public isModalVisible: boolean;

    private selectedFile: File;
  
    constructor(
        private imageService: ImageService,
        private route: ActivatedRoute,
        private changeDetector: ChangeDetectorRef
    ) {}

    //event
    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.dictaatName = params['dictaatName'];
        });

        this.imageService.getIsModalVisible().subscribe((isModalVisible: boolean) => {
            this.isModalVisible = isModalVisible;
            this.changeDetector.markForCheck(); // marks path

        });
    }

    public fileChange(event): void {
        this.selectedFile = event.target.files[0];
    }

    public Add(): void {

        this.imageService.addImages(this.dictaatName, this.selectedFile)
            .then((imageLocation: string) => {
                this.imageService.CompleteModal( {
                    dictaatName: this.dictaatName,
                    imageLocation: imageLocation
                });
            });
    }

    public Cancel(): void {
        this.imageService.CancelModal();
    }
}

