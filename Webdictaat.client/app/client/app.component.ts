import { Component  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: "wd-app",
    templateUrl: "pages/shared/layout.html",
})
export class AppComponent {

    public Title: string = "Webdictaat";

    public showSidebar: boolean = false;

    constructor(private router: Router) {
        router.events.subscribe((val) => this.showSidebar = false);
    }

}