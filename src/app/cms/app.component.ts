import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../shared/services/config.service";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { GoogleAnalyticsEventsService } from '../shared/services/google-analytics.service';
// ./src/app/services/google-analytics-events-service.ts

@Component({
    selector: "wd-cms-app",
    styleUrls: ['./app.component.css'],
    templateUrl: "./app.component.html",
})
export class AppComponent  { 

    constructor(public router: Router, public ga: GoogleAnalyticsEventsService) {
        this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            ga.set(event.urlAfterRedirects)
            ga.send();
          }
        });
      }

}