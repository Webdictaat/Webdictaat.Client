import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavMenuService } from './nav-menu.service';

import { NavMenu } from '../models/nav-menu';

@Component({
    selector: "wd-nav-menu",
    templateUrl: "http://localhost:3000/app/nav-menu/nav-menu.component.html",
    providers: [NavMenuService]
})
export class NavMenuComponent implements OnInit {

    private page;

    @Input()
    public navMenu: NavMenu;

    constructor(
        private route: ActivatedRoute,
        private navMenuService: NavMenuService
    ) { }

    public ngOnInit(): void {
        if (this.navMenu == null) {
            this.navMenuService.getNavMenu()
                .then(navMenu => {
                    this.navMenu = navMenu
                });
        }
    }
}





