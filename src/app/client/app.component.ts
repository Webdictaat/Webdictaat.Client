import { Component  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: "wd-client-app",
    templateUrl: "./app.component.html",
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public Title: string = "Webdictaat";

    public showSidebar: boolean = false;

    constructor(private router: Router) {
        //hide sidebar when navigating
        router.events.subscribe((val) => this.showSidebar = false);
    }

}