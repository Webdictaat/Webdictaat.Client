import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PagesService} from './pages.service';
import { Router } from '@angular/router';
import { DragulaService } from "ng2-dragula";
import { Dictaat } from "../../shared/models/dictaat";
import { NavMenuItem } from "../../shared/models/nav-menu";
import { NavMenuService } from "../../shared/nav-menu/nav-menu.service";
import { DictaatService } from "../../shared/services/dictaat.service";



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

    public toggleItem(item: NavMenuItem){
        item.isOpen = !item.isOpen;

    }

    public toggleEnabled(item: NavMenuItem){
        item.isEnabled = !item.isEnabled;
        debugger;
        this.navMenuService.updateNavMenu(this.dictaat.name, this.dictaat.menuItems);
    }


    public getDragOptions(){
        return {
            moves: function(el, source, handle, sibling){

                while(handle && handle.localName != "li") { //keep going up until you find a match
                    handle = handle.parentNode; //go up
                }

                return !handle.classList.contains('sub')
            }
        }
    }

    public enableEdit(item: NavMenuItem){
       item.isEdit = !item.isEdit;
    }

    public updateMenu(item: NavMenuItem){
        item.isEdit = false;
        this.navMenuService.updateNavMenu(this.dictaat.name, this.dictaat.menuItems);
    }

    public addPage(){
        var params = [];
        params['dictaatName'] = this.dictaat.name;
        this.pagesSevice.ShowModal(params).then((menuItems) => {
            this.dictaat.menuItems = menuItems;
         });
    }

    public addMenu(){
        var newItem = new NavMenuItem({name: "New menu item"});
        this.dictaat.menuItems.push(newItem);
        newItem.isEdit = true;
    }

    public deleteSubmenu(menuItem: NavMenuItem){
        this.dictaat.menuItems.forEach((mi, index, list) => {
            if(mi.name == menuItem.name){
                if(mi.menuItems.length > 0){
                    alert("Cannot delete a sub menu with pages inside!");
                }
                else{
                    menuItem.isDeleted = true;
                    list.splice(index, 1);
                    this.navMenuService.updateNavMenu(this.dictaat.name, this.dictaat.menuItems);
                }
            }
        })
    }

    public deletePage(page: NavMenuItem): void {
        page.isDeleted = true;

        this.pagesSevice.deletePage(this.dictaat.name, page.url).then((menuItems) => {
            if(!menuItems)
              page.isDeleted = false;
        }, (error) => page.isDeleted = false)
           
    }

    public editPage(page): void {
        this.router.navigateByUrl("/dictaten/" + this.dictaat.name + "/pages/" + page.url); 
    }
}