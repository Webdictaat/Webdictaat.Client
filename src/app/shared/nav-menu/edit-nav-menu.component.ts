
import { Component, Input } from "@angular/core";
import { Dictaat } from "../models/dictaat";
import { NavMenuItem } from "../models/nav-menu";
import { PagesService } from "../pages/pages.service";
import { Router } from "@angular/router";
import { DragulaService } from "ng2-dragula";
import { NavMenuService } from "./nav-menu.service";

@Component({
    selector: "wd-edit-nav-menu",
    styles: [`
        ul{ list-style-type: none; padding: 0;}
        ul ul{padding-left: 30px }
        .sub-menu-item{ padding:10px; cursor: pointer; } span.title{ margin-left:10px; }
        .menu-item{ padding:10px; position:relative; } 
        .menu-item:hover{ background-color: #eee; cursor: pointer;} 
        .actions{ 
            position:absolute; right:0px; height:100%; width: 60px; top: 0px; 
            padding:7px; color: #d9534f; font-size:130%; cursor: pointer; 
        }
        .actions:hover{ background-color:#d9534f; color: white; }
        span.title{ margin-left:10px;  }
        .gu-mirror{list-style-type:none;}
        .gu-mirror .actions { display:none; }
    `],
    templateUrl: './edit-nav-menu.component.html'
})
export class EditNavMenuComponent{

    @Input()
    public dictaat: Dictaat;

    public constructor(
        private pagesSevice: PagesService,
        private router : Router,
        private dragulaService: DragulaService,
        private navMenuService: NavMenuService
    ){}

    public ngOnInit(){
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

                while(handle && handle.localName != "li") { //keep going up until you find a match
                    handle = handle.parentNode; //go up
                }

                return !handle.classList.contains('sub')
            }
        }
    }

    public addPage(){
        this.pagesSevice.ShowModal().then((page) => { /**
         * todo: refresh menu
         */ });
    }

    public deletePage(page): void {
        this.pagesSevice.deletePage(this.dictaat.name, page.url);
           
    }

    public editPage(page): void {
        this.router.navigateByUrl("/dictaten/" + this.dictaat.name + "/pages/" + page.url); 
    }



}



       