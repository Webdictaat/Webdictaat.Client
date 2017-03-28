import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DialogService, DialogData } from '../services/dialog.service';

@Component({
    selector: "wd-dialog",
    templateUrl: "./dialog.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit {

    public isVisible: boolean;
    public Content: string;
    public Title: string;

    constructor(private dialogService: DialogService, private changeDetector: ChangeDetectorRef) {  }

    public ngOnInit(): void {
        this.dialogService.getDialogData().subscribe((dialogData: DialogData) => {
            this.isVisible = true;
            this.Content = dialogData.Content;
            this.Title = dialogData.Title;
            this.changeDetector.markForCheck(); // marks path

        });
    }

    public hideDialog(): void {
        this.isVisible = false;
    }
}

