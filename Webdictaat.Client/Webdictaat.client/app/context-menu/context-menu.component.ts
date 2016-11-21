import { Component, Input } from '@angular/core';



@Component({
    selector: "wd-dictaat-entry",
    template: `
        <div class="entry" (click)="showSub = !showSub">
            <span class="glyphicon glyphicon-folder-open" aria-hidden="true" *ngIf="showSub"></span>
            <span class="glyphicon glyphicon-folder-close" aria-hidden="true" *ngIf="!showSub"></span>
            <span class='title'>{{entry.name}}</span>
        </div>
        <ul *ngIf="showSub">
            <li class="directory" *ngFor="let subEntry of entry.entries">
                <wd-dictaat-entry [entry]="subEntry" ></wd-dictaat-entry>
            </li>
            <li class="file" *ngFor="let file of entry.files">
                <span class="glyphicon glyphicon-file" aria-hidden="true"></span>
                <span class='title'>{{file.name}}</span>
            </li>
        </ul>
    `,
    styles: [`
        ul{
            padding-left:20px;
        }

        li{
            padding:0px;
            list-style-type:none;
        }

        .entry{
            cursor: pointer;
        }

        .glyphicon{
            margin-right:5px;
        }


        `],
})
export class DictaatEntryComponent {

    @Input() public entry: Object;

    public showSub = false;

}
    
