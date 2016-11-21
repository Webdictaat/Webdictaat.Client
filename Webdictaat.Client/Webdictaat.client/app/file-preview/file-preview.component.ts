import { Component, EventEmitter } from '@angular/core';

import { FilePreviewService } from '../services/file-preview.service';
import { Page } from '../models/page';

@Component({
    selector: "wd-file-preview",
    templateUrl: './app/file-preview/file-preview.component.html',
    styleUrls: ["./app/file-preview/file-preview.component.css"],
})
export class FilePreviewComponent {

    public selectedFile: Page;

    constructor(private filePreviewService: FilePreviewService) {
        filePreviewService.selectedFile$.subscribe(file => this.selectedFile = file);
    }


    public closeFile(): void {
        this.filePreviewService.clearSelection();
    }
}

