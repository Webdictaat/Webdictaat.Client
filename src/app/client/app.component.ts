import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ConfigService } from "../shared/services/config.service";
import { DictaatService } from "../shared/services/dictaat.service";
import { GoogleAnalyticsEventsService } from '../shared/services/google-analytics.service';


var ga: any;

@Component({
    selector: "wd-client-app",
    templateUrl: "./app.component.html",
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


    public Title: string = "Webdictaat";
    private landingPage: string;
    public showSidebar: boolean = false;

    constructor(
        private router: Router,
        private configService: ConfigService,
        public ga: GoogleAnalyticsEventsService) {
    }

    private unhandledRouteEvents: string[] = [];

    private sendNewRouteEvent(url)
    {
        this.unhandledRouteEvents.push(url);

        if(this.Title)
        {
            this.unhandledRouteEvents.forEach((url) => {
                this.ga.set(this.Title + '/#' + url)
                this.ga.send();
            })
        }
    }

    ngOnInit(): void {
        this.configService.DictaatName.subscribe(dictaatName => this.Title = dictaatName);
        this.router.events.subscribe((event) => {
            this.showSidebar = false;
            if(event instanceof NavigationEnd) {
                window.scrollTo(0, 0);
                this.sendNewRouteEvent(event.urlAfterRedirects);
            }
        });    

        //get the local config once
        this.configService.GetLocalConfig();
    }


}