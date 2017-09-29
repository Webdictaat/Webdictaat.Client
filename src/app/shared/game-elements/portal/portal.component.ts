import { Component, OnInit } from '@angular/core';

import { DictaatService } from "../../services/dictaat.service";
import { AccountService } from "../../services/account.service";
import { ConfigService } from "../../services/config.service";
import { ParticipantService } from "../../services/participantService";


@Component({
  selector: 'wd-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  
  public portal: any;

  constructor(
    private participantService: ParticipantService,
    private accountService: AccountService, 
    private configService: ConfigService){}

    private config;
    private user;

    ngOnInit() {
      this.accountService.User.subscribe(user => { this.user = user; this.retrieveParticipant(); });
      this.configService.Config.subscribe(config => { this.config = config; this.retrieveParticipant(); });
    }

    public retrieveParticipant(): any{
        if(this.config && this.user){
            this.participantService.getParticipant(this.config.name, this.user.email)
            .then((participant) => {
                this.portal = participant;
            })
        }
    }

    public onError(): any{

    }

}
