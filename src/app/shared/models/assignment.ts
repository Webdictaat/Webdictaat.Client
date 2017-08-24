export class Assignment{

    public id: number;
    public title: string;
    public description: string;
    public metadata : string;
    public points : number;
    public submissions : any[];
    public mySubmission : any;
    public submissionCount : number;
    public level: number;
    public externalId: string;
    
    constructor(json = null){
        if(json){
            this.id = json.id;
            this.title = json.title;
            this.description = json.description;
            this.points = json.points;
            this.metadata = json.metadata;
            this.mySubmission = json.MySubmission;
            this.level = json.level;
        }
        else{
            this.level = 1;
        }
    }

    public isValid() : boolean{
        if(this.title && this.description && this.points)
        {
            return true;
        }
        else{
            return false;
        }
    }

}


