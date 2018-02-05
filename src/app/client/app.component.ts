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
    private landingPage: string;
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
                    ga.set(this.Title + '/#' + event.urlAfterRedirects)
                    ga.send();
                }
                else{
                    this.landingPage = event.urlAfterRedirects;
                }
                
            }
        
        });
        configService.Config.subscribe(c => this.Title = c ? c.name : null);
    }

     ngOnInit(): void {
        this.configService.GetLocalConfig().subscribe(() => {

            //The first time you load a page, the config is not ready to rumble.
            //for this reason we store the landing page in a varible, 
            //en send the GA event after the config has been loaded.
            if(this.landingPage)
            {
                this.ga.set(this.Title + '/#' + this.landingPage)
                this.ga.send();
                this.landingPage = null; //clear landing page value
            }
        });

    }


}