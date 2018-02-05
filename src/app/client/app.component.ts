import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ConfigService } from "../shared/services/config.service";
import { DictaatService } from "../shared/services/dictaat.service";
import { GoogleAnalyticsEventsService } from '../shared/services/google-analytics.service';
@Component({
    selector: "wd-client-app",
    templateUrl: "./app.component.html",
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


    public Title: string = "Webdictaat";

    public showSidebar: boolean = false;

    constructor(
        private router: Router,
        private configService: ConfigService,
        public ga: GoogleAnalyticsEventsService) {
        //hide sidebar when navigating
        router.events.subscribe((event) => {
            this.showSidebar = false;

            if(event instanceof NavigationEnd) {
                window.scrollTo(0, 0);
                if(this.Title != null)
                {
                    debugger;
                    ga.set(this.Title + '/#' + event.urlAfterRedirects)
                    ga.send();
                }
                
            }
        
        });
        configService.Config.subscribe(c => this.Title = c ? c.name : null);
    }

     ngOnInit(): void {
        this.configService.GetLocalConfig();
    }


}