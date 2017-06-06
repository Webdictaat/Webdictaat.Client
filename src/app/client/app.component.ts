import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(private router: Router, private dictaatService: DictaatService, private configService: ConfigService) {
        //hide sidebar when navigating
        router.events.subscribe((val) => this.showSidebar = false);
    }

     ngOnInit(): void {
        this.configService.GetLocalConfig();
        this.configService.Config.subscribe((config) => {
            if(!config) return;

            this.dictaatService.getDictaatSession(config.name).subscribe((session) => {
                if(session.containsMe){
                    alert("yay you are in");
                }
                else{
                    alert('sad panda :(');
                }
            });
        })
    }


}