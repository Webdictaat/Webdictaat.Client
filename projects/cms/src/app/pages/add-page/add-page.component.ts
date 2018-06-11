import { Component, EventEmitter, Output, NgZone, Input } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BaseModalComponent } from 'core/lib/core/basemodal.service';
import { Page } from 'core/lib/models/page';
import { Dictaat } from 'core/lib/models/dictaat';
import { PagesService } from '../pages.service';
import { DictaatService } from 'core/lib/services/dictaat.service';
import { ActivatedRoute } from '@angular/router';
import { NavMenuService } from 'core/lib/nav-menu/nav-menu.service';
import { NavMenuItem } from 'core/lib/models/nav-menu';

@Component({
    selector: "wd-add-page",
    styleUrls: ['./add-page.component.css'],
    templateUrl: "./add-page.component.html",
    providers: []
})
export class AddPageComponent extends BaseModalComponent {
    
    public template: string = "default";
    public errors: any[];
    
    public page: Page = new Page();
    public menus: string[] = [];
    public menuName: string;

    @Input()
    private dictaat: Dictaat;

    constructor(
        private pageService: PagesService,
        private dictaatService: DictaatService,
        private menuService: NavMenuService,
        private route: ActivatedRoute,
        private zone: NgZone
    ) { 
        super();
        this.page.name = "";
    }

    public trim(str) {
        return str.replace(/\s/g, '');
    }

    //event
    public ngOnInit(): void {
        super.wdOnInit(this.pageService, this.zone);
    }

    public cancel(){
        this.isModalVisible = false;
    }

    public add(): void {

        this.errors = [];

        //check for duplicate
        this.dictaat.menuItems.forEach((menuItem) => {

            if(menuItem.name == this.page.name){
                this.errors.push("Page with name '" + this.page.name + "' already excists");
            }
            else if(!menuItem.url){
                menuItem.menuItems.forEach((subMenuItem) => {
                    if(subMenuItem.name == this.page.name){
                        this.errors.push("Page with name '" + this.page.name + "' already excists");
                    }
                });
            }
        });



        if(this.errors.length != 0)
            return;

        var page = {
            name: this.page.name, 
            url: this.trim(this.page.name)
        };

        this.pageService.addPage(this.dictaat.name, page, this.menuName, this.template)
            .then(menuItems => {
                this.page = new Page();
                this.dictaat.menuItems = menuItems;
                this.pageService.CompleteModal(menuItems);
            }, (error) => {
                
                if(error.status == 400)
                    return this.errors.push("Page name not valid. The following characters are not allowed: #, &, $")
                
            
                this.pageService.CancelModal();
                alert("Something went wrong!");
            });
    }
}

