import { Component, OnInit, Input } from '@angular/core';
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

    @Input()
    public menuItems: NavMenuItem[];

    constructor(
        private route: ActivatedRoute,
        private navMenuService: NavMenuService
    ) { }

    public ngOnInit(): void {
        if(!this.menuItems) {
            this.navMenuService.getLocalNavMenu().then(menuItems => {
                    this.menuItems = menuItems
            });
        }
    }
}





