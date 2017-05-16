
export class NavMenuItem {
    public name: string;
    public url: string;
    public menuItems: NavMenuItem[] = [];
    public isDeleted: boolean;
    public isOpen: boolean;
    public isEdit: boolean;

    constructor(data: any = null){
        if(data){
            this.name = data.name;
            this.url = data.url;
            this.menuItems = data.menuItems;
        }

        if(!this.menuItems)
            this.menuItems = [];
    }
} 