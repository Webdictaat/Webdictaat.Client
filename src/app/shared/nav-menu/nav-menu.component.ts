﻿import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavMenuService } from './nav-menu.service';

import { NavMenuItem } from '../models/nav-menu';

@Component({
    selector: "wd-nav-menu",
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css'],
    providers: [NavMenuService]
})
export class NavMenuComponent implements OnInit {

    private page;
    private selected: NavMenuItem;

    @Input()
    public MenuItems: NavMenuItem[];

    constructor(
        private route: ActivatedRoute,
        private navMenuService: NavMenuService
    ) { }

    public toggle(item: NavMenuItem){
        if(this.selected == item){
            this.selected = null;
        }
        else{
            this.selected = item;
        }
    }

    public ngOnInit(): void {
        if(!this.MenuItems) {
            this.navMenuService.getLocalNavMenu().then(menuItems => {
                    this.MenuItems = menuItems
            });
        }
    }
}





