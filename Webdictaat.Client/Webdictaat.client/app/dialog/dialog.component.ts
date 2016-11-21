import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DialogService, DialogData } from '../services/dialog.service';

@Component({
    selector: "wd-dialog",
    templateUrl: "./app/dialog/dialog.component.html",
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
            this.changeDetector.detectChanges();

        });
    }

    public hideDialog(): void {
        this.isVisible = false;
    }
}

