import { PageSummary } from './page-summary';
import { NavMenuItem } from './nav-menu';

export class Dictaat {
    name: string;
    location: string;
    lastChange: Date;
    pages: PageSummary[];
    menuItems: NavMenuItem[];

    constructor(json = null){
        this.name = json.name;
        this.location = json.locatoin;
        this.pages = json.pages;
        this.menuItems = json.menuItems;
    }
}