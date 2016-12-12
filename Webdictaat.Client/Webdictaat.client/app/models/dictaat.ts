import { PageSummary } from './page-summary';
import { NavMenu } from './nav-menu';

export class Dictaat {
    name: string;
    location: string;
    lastChange: Date;
    pages: PageSummary[];
    menu: NavMenu;
}