import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef, ElementRef  } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ImageService } from '../services/images.service';


import { Question } from '../models/question';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "wd-add-image",
    templateUrl: "./app/images/add-image.component.html",
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
            if (isModalVisible) {
                this.changeDetector.detectChanges();
            }
          
        });
    }

    public fileChange(event): void {
        this.selectedFile = event.target.files[0];
    }

    public Add(): void {

        this.imageService.addImages(this.dictaatName, this.selectedFile)
            .then((question: Question) => {
                this.imageService.HideModal();
            });
    }

    public Cancel(): void {
        this.imageService.CancelModal();
    }
}

