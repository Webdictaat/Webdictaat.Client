import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DragulaService } from "ng2-dragula";
import { Dictaat } from '../../../shared/models/dictaat';
import { NavMenuItem } from '../../../shared/models/nav-menu';
import { PagesService } from '../pages.service';
import { NavMenuService } from '../../../shared/nav-menu/nav-menu.service';
import { DictaatService } from '../../../shared/services/dictaat.service';




@Component({
    selector: "wd-pages",
    templateUrl: "./pages.component.html",
    styleUrls: ['./pages.component.css']
})
export class PagesComponent{

    public dictaat: Dictaat;

    public selectedItem: NavMenuItem;

    public constructor(
        private pagesSevice: PagesService,
        private router : Router,
        private dragulaService: DragulaService,
        private navMenuService: NavMenuService,
        private dictaatService: DictaatService
    ){}

    public ngOnInit(){

        this.dictaatService.CurrentDictaat.subscribe((dictaat: Dictaat) => {
            this.dictaat = dictaat;
        });

        this.dragulaService.drop.subscribe((value) => {
            //save menu
            this.navMenuService.updateNavMenu(this.dictaat.name, this.dictaat.menuItems)
                .then((menuItems) => {
                    //this.dictaat.menuItems = menuItems;
                });
        });
    }

    public getDragOptions(){
        return {
            moves: function(el, source, handle, sibling){
                return handle.className === 'handle' || handle.parentNode.className ==='handle';
            },
            accepts: function(el, target, source, sibling) {
                if(el.children[0].children[0].className == "folder-item")
                {
                    return target.className != 'sub-menu';
                }
                return true;
            }
        }
    }

    public addPage(){
        var params = [];
        params['dictaatName'] = this.dictaat.name;
        this.pagesSevice.ShowModal('add', params).then((menuItems) => {
            this.dictaat.menuItems = menuItems;
         });
    }

    public addMenu(){
        var newItem = new NavMenuItem({name: "New menu item"});
        this.dictaat.menuItems.push(newItem);
        newItem.isEdit = true;
    }



    public updateMenu(item: NavMenuItem){
        //if deleted, remove from menu
        if(item.isDeleted){
            if(item.url)
            {
                ////if it's a page, delete the page first
                this.pagesSevice.deletePage(this.dictaat.name, item.url).then((menuItems) => {
                   
                    this.dictaat.menuItems = menuItems;
                });
            }
            else{
                //otherwise just remove it
                this.removeItem(item, this.dictaat.menuItems); 
                this.navMenuService.updateNavMenu(this.dictaat.name, this.dictaat.menuItems);
            }
        }
        else{
            this.navMenuService.updateNavMenu(this.dictaat.name, this.dictaat.menuItems);
        }
    }

    public deletePage(page: NavMenuItem): void {
        this.pagesSevice.deletePage(this.dictaat.name, page.url).then((menuItems) => {
            if(!menuItems)
              page.isDeleted = false;
        }, (error) => page.isDeleted = false)
    }

    public editPage(page): void {
        this.router.navigateByUrl("/dictaten/" + this.dictaat.name + "/pages/" + page.url); 
    }

    /**
     * Helper method for the 'update menu' 
     * @param item 
     * @param menu 
     */
    private removeItem(item: NavMenuItem, menu: NavMenuItem[])
    {
        //check if nested
        (menu).forEach(i => {
            if(i.menuItems.length > 0)
                this.removeItem(item, i.menuItems);
        });

        var index = menu.indexOf(item);

        //remove item! :)
        if(index != -1){
            this.dictaat.menuItems.splice(index, 1);
        }
    }
}