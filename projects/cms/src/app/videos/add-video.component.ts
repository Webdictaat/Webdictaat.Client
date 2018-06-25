import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseModalComponent, VideoService} from "core"
 

@Component({
    selector: "wd-add-video",
    templateUrl: "./add-video.component.html",
})
export class AddVideoComponent extends BaseModalComponent implements OnInit{
    
    public videoTag: string;

    @Output()
    public videoAdded = new EventEmitter();

    constructor(
        private videoService: VideoService,
        private route: ActivatedRoute,
        private changeDetector: ChangeDetectorRef,
        private  zone: NgZone
    ) {
        super();
    }

    ngOnInit(): void {
        super.wdOnInit(this.videoService, this.zone);
    }

    public Add(): void {
        this.videoService.CompleteModal(this.videoTag); 
    }

    public Cancel(): void {
        this.videoService.CancelModal();
    }
}

