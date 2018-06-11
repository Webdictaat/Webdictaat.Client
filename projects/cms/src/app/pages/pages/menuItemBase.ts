import { ViewChild, ElementRef, Input, Output, EventEmitter } from "@angular/core";
import { NavMenuItem } from "core/lib/models/nav-menu";

export class MenuItemBase {

    @Input()
    public item: NavMenuItem;

    @Output()
    public onUpdate = new EventEmitter();

    @ViewChild('inputName')
    public folderEl: ElementRef;

    public isEdit: boolean;

    public toggleEdit() {
        this.isEdit = !this.isEdit;
        if (this.isEdit) {
            setTimeout(() => {
                //focus element and select all the text
                this.folderEl.nativeElement.focus();
                this.folderEl.nativeElement.setSelectionRange(0, this.folderEl.nativeElement.value.length)
            })
        }
    }

    public toggleEnabled() {
        this.item.isDisabled = !this.item.isDisabled;
        this.onUpdate.emit(this.item);
    }

    public getDragOptions() {
        return {
            moves: function (el, source, handle, sibling) {
                return handle.className === 'handle' || handle.parentNode.className ==='handle';                
            }
        }
    }




}