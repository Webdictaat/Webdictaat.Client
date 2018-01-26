import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../../shared/models/user';
import { DictaatService } from '../../shared/services/dictaat.service';
import { AccountService } from '../../shared/services/account.service';
import { ConfigService } from '../../shared/services/config.service';
import { ParticipantService } from '../../shared/services/participantService';

@Component({
  selector: 'wd-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private dictaatName: string;
  public user: User;
  public group: string;
  public groups: any[];
  public session: any;
  public participant: any;

  constructor(
    private dictaatService: DictaatService, 
    private participantService: ParticipantService,
    private accountService: AccountService, 
    private configService: ConfigService) {  }

  ngOnInit() {

    this.accountService.User.subscribe(user => {
        this.user = user;
        this.retrieveData();
    });
     
    this.configService.Config.subscribe((config) => {
        if(!config) return;
        this.dictaatName = config.name;
        this.retrieveData();
    });
  }

  public retrieveData()
  {
      if(!this.dictaatName || !this.user) return;

      this.dictaatService.getGroups(this.dictaatName).then(groups => {
        this.groups = groups;
        this.groups.push({groupName: "none"})
      });

      this.participantService.getParticipant(this.dictaatName, this.user.email).then((participant) => {
          this.participant = participant;
          this.group = participant.group;
      });
    }

    public isSwitching: boolean;

    public join(groupName){
      this.isSwitching = true;
      this.dictaatService.join(this.dictaatName, this.group)
        .then(didJoin => {
          this.participant.group = groupName; 
          this.isSwitching = false 
        });
    }

    public switchGroup(groupName){
      this.isSwitching = true;
      this.dictaatService.switchGroup(this.dictaatName, this.group)
        .subscribe(didJoin => {
          this.participant.group = groupName; 
          this.isSwitching = false 
        });
    }
}
