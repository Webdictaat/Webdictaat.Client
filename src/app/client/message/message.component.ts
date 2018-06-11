import { Component, OnInit, transition, style, animate, trigger } from '@angular/core';
import { DictaatService } from "../../shared/services/dictaat.service";
import { ConfigService } from "../../shared/services/config.service";
import { AccountService } from "../../shared/services/account.service";
import { Subject } from "rxjs";
import { User } from "../../shared/models/user";

@Component({
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('1000ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('1000ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
  selector: 'wd-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  private dictaatName: string;
  public hide:boolean = true;
  public participantCount :number;
  public user: Subject<User>;
  public group: string;
  public groups: any[];

  constructor(private dictaatService: DictaatService, private accountService: AccountService, private configService: ConfigService) {}

  ngOnInit() {
       this.user = this.accountService.User;
       
       this.configService.Config.subscribe((config) => {
            if(!config) return;

            this.dictaatName = config.name;


            this.dictaatService.getDictaatSession(config.name).subscribe((session) => {
                 this.participantCount = session.participantIds.length;
                 this.dictaatService.getGroups(this.dictaatName)
                  .then(groups => {
                      this.groups = groups;
                      this.groups.push({groupName: "none"})
                      this.hide = session.containsMe;
                  });
            });
        })
  }

  public join(){
    this.dictaatService.join(this.dictaatName, this.group)
      .then(didJoin => this.hide = true);
  }

  public login(){
    this.accountService.Login();
  }

}
