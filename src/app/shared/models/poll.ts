
export class Poll{
    
    public id: number;
    public question: string;
    public body: any;
    public options: any[];
    public myVote: any;

    constructor(json = null){

        this.options = [{}, {}];

        if(json){
            this.id = json.id;
            this.options = json.options;
            this.question = json.question;
            this.myVote = json.myVote;
        }
        
    }

    public isValid(): boolean{
        return this.question != null && this.options.length >= 2;
    }
}