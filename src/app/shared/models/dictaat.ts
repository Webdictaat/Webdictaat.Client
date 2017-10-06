import { PageSummary } from './page-summary';
import { NavMenuItem } from './nav-menu';

export class Dictaat {
    name: string;
    location: string;
    lastChange: Date;
    pages: PageSummary[];
    menuItems: NavMenuItem[];
    canContribute: boolean;
    owner: any;

    constructor(json = null){
        this.name = json.name;
        this.location = json.location;
        this.pages = json.pages;
        this.menuItems = json.menuItems;
        this.owner = json.owner;
    }
}


export class DictaatSession{
    containsMe: boolean;
    participantIds: number[]
}

export class DictaatMarkingsAssignment{

      id: number;
      title: string;
      submissions: any[];
      metadata: string;

      constructor(json = null){
        if(json){
            this.id = json.id;
            this.title = json.title;
            this.submissions = json.submissions;
            this.metadata = json.metadata;
        }
      }

      public getSubmission(userId: string): any{
        return this.submissions.find(s => s.userId == userId);
      }
}

export class DictaatMarkings{

    participants: any[] = [];
    assignments: DictaatMarkingsAssignment[] = [];

    constructor(json = null){
        if(json){
            this.participants = json.participants;
            json.assignments.forEach(a => {
                this.assignments.push(new DictaatMarkingsAssignment(a));
            })
        }
        
    }


   
}