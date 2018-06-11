import { Component, EventEmitter, Input } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Dictaat } from 'core/lib/models/dictaat';
import { User } from 'core/lib/models/user';
import { DictaatService } from 'core/core';


@Component({
    styleUrls: ['./settings-dictaat.component.css'],
    selector: "wd-settings-dictaat",
    templateUrl: "./settings-dictaat.component.html",
})
export class DictaatSettingsComponent {
    
    public errMsg: string;
    public showModal: boolean;
    public contributers: User[];
    public groups: any[];

    private dictaat: Dictaat;
    public nameRegex = "^[A-Za-z0-9_-]*$";

    
    constructor(private dictaatService: DictaatService, private router: Router) { }

    ngOnInit() {
        this.dictaatService.CurrentDictaat
        .subscribe((dictaat) => {
            if(dictaat){
                this.dictaat = dictaat;
                this.dictaatService.getDictaatContributers(dictaat.name)
                    .then(contributers => this.contributers = contributers)

                this.dictaatService.getGroups(dictaat.name)
                    .then(groups => this.groups = groups)
            }
        });
    }

    public showContributerModal: boolean;

    public addContributers(email: string){
        this.errMsg = null;
        this.dictaatService.addContributer(this.dictaat.name, email)
        .then(contributers => {
            this.contributers = contributers;
            this.showContributerModal = false;
        }).catch(err => {
            this.errMsg = "Could not find user with email " + email;
        })
    }

    public showGroupsModal: boolean;

    public addGroups(groupstring: string) {
        this.errMsg = null;
        var groups = [];
        groupstring.split(',').forEach(s => {
            groups.push({ groupName: s.trim()});
        });

        groups.forEach(ng => {
          this.groups.forEach(og => {
              if(ng.groupName == og.groupName) 
                this.errMsg = "There is already a group with name '" + ng.groupName + "'";
          })  
        })

        if(this.errMsg) return;

        this.dictaatService.addGroups(this.dictaat.name, groups)
            .subscribe(groups => {
                this.groups = groups
                this.errMsg = null;
                this.showGroupsModal = false;
            })
    }

    public selectedGroup : any;
    public showDeleteGroupModal : boolean;

    public deleteGroup(group: any, confirmed = false)
    {
        if(!confirmed && group.members.length != 0)
        {
            this.selectedGroup = group;
            return this.showDeleteGroupModal = true;
        }
        this.dictaatService.removeGroup(this.dictaat.name, group.groupName)
            .subscribe(groups => 
            {
                this.groups = groups
                this.showDeleteGroupModal = false;
            })
    }

    public showCopyModal: boolean;
    public copyingState: number = 0; //0 = idle, 1 = copying, 2 = done
    public newName: string;

    public copyDictaat(newName: string){
        this.newName = newName;
        this.copyingState = 1;
        this.showCopyModal = false; 
        this.dictaatService.copyDictaat(this.dictaat.name, newName)
            .then(() => {
                this.copyingState = 2;
            });
    }


    public gotoDetail(dictaatName): void {
        let link = ['/dictaten', dictaatName];
        this.router.navigate(link);
    }

}