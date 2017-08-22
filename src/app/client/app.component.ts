import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ConfigService } from "../shared/services/config.service";
import { DictaatService } from "../shared/services/dictaat.service";
@Component({
    selector: "wd-client-app",
    templateUrl: "./app.component.html",
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


    public Title: string = "Webdictaat";

    public showSidebar: boolean = false;

    constructor(private router: Router) {
        //hide sidebar when navigating
        router.events.subscribe((event) => {
            this.showSidebar = false;

            if(event instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }
        
        });
    }



     ngOnInit(): void {
     
    }


}