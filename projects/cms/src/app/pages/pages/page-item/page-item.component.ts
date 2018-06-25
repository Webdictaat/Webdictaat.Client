import { Component, OnInit, Input } from '@angular/core';
import { NavMenuItem } from 'core';
import { MenuItemBase } from '../menuItemBase';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wd-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent extends MenuItemBase implements OnInit {

  public newTitle: string;

  constructor(private router: Router, private r:ActivatedRoute) {  
    super();
  }

  ngOnInit() {
    this.newTitle = this.item.name;
  }

  public editPage()
  {
      this.router.navigate([this.item.url], { relativeTo: this.r}); 
  }

  public updateItem(){
    this.isEdit = false;
    this.item.name = this.newTitle;
    this.onUpdate.emit(this.item);
  }

  public deleteItem() {
    if (confirm("Are you sure you want to delete this page? This action cannot be undone!")){
        this.item.isDeleted = true;
        this.onUpdate.emit(this.item);
    }

  }

}
