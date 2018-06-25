import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, NgZone } from '@angular/core';
import { NavMenuItem } from 'core';
import { NavMenuService } from 'core';
import { MenuItemBase } from '../menuItemBase';

@Component({
  selector: 'wd-folder-item',
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.css']
})
export class FolderItemComponent extends MenuItemBase implements OnInit {



  public isOpen: boolean;
  public newTitle: string;

  constructor(private navMenuService: NavMenuService, private ngZone: NgZone) {
    super();
  }

  ngOnInit() {
    //Check if open or not
    this.isOpen = JSON.parse(localStorage.getItem(this.item.name));
    this.newTitle = this.item.name;
  }

  public toggleOpen(): boolean {
    //don't toggle when editing
    if (this.isEdit)
      return;
    localStorage.setItem(this.item.name, JSON.stringify(!this.isOpen));
    return this.isOpen = !this.isOpen;
  }

  public updateItem() {
    this.isEdit = false;
    this.item.name = this.newTitle;
    this.onUpdate.emit(this.item);
  }

  public updateChild(child){
    this.onUpdate.emit(child);
  }

  public deleteItem() {
    if (this.item.menuItems.length > 0) {
      return alert("Cannot delete a sub menu with pages inside!");
    }

    this.item.isDeleted = true;
    this.onUpdate.emit(this.item);
  }
}




