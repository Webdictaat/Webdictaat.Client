
export class NavMenu {
    Name: string;
    SubMenus: NavMenu[] = [];
    MenuItems: NavMenuItem[] = [];
    show: boolean = false;
}

export class NavMenuItem {
    public Name: string;
    public Url: string;
}