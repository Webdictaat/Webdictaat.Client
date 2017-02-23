import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavMenuService } from './nav-menu.service';

import { NavMenu } from '../models/nav-menu';

@Component({
    selector: "wd-nav-menu",
    template: `
<ul class="nav navbar-nav" *ngIf="navMenu" [ngClass]="{'dropdown-menu ': !isRoot}">

    <li *ngFor="let item of navMenu.MenuItems" >
        <a routerLink="{{item.Url}}" routerLinkActive="active">{{item.Name}}</a>
    </li>

    {{showMenu}}

    <li class="dropdown" *ngFor="let menu of navMenu.SubMenus">

        <a  (click)="menu.show = !menu.show" class="dropdown-toggle">{{menu.Name}}<span class="caret"></span></a>
      
        <wd-nav-menu [navMenu]="menu" [showMenu]="showMenu"  (click)="menu.show = !menu.show" *ngIf="menu.show">
        </wd-nav-menu>
    </li>
</ul>
`,
    providers: [NavMenuService]
})
export class NavMenuComponent implements OnInit {

    private page;

    @Input()
    public navMenu: NavMenu;

    @Input()
    public isRoot: boolean;

    @Input()
    public showMenu: boolean;

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

    public toggleMenu() {
        this.showMenu = false;
    }
}





