import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { QuestionsService } from '../services/question.service';
import { DictaatService } from '../services/dictaat.service';


import { Question, QuestionAnswer } from '../models/question';
import { ActivatedRoute, Params } from '@angular/router';
import { VideoService } from "../services/video.service";

@Component({
    selector: "wd-add-video",
    templateUrl: "./add-video.component.html",
})
export class AddVideoComponent implements OnInit {
    
    public videoTag: string;

    public isModalVisible: boolean;
  
    @Output()
    public videoAdded = new EventEmitter();

    constructor(
        private videoService: VideoService,
        private route: ActivatedRoute,
        private changeDetector: ChangeDetectorRef,
        private  zone: NgZone
    ) {}

    //event
    public ngOnInit(): void {

        this.videoService.getIsModalVisible().subscribe((isModalVisible: boolean) => {
            
            this.isModalVisible = isModalVisible;
            if (isModalVisible) {
                this.videoTag = "";
            }

            this.zone.run(() => {});
          
        });
    }

    public Add(): void {
        this.videoService.CompleteModal(this.videoTag); 
    }

    
    public Cancel(): void {
        this.videoService.CancelModal();
    }
}

