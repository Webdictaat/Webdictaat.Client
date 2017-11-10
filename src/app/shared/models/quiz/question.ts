import { Answer } from "./answer";  
   


export class Question{
    
    public id: number;
    public text: string;
    public body: any;
    private original: string;
    public type: string; 
    public explanation: string;
    public isCorrect : boolean;

    constructor(json = null){
        if(json){
            this.id = json.id;
            this.text = json.text;
            this.type = json.type;
            this.body = json.body;
            this.explanation = json.explanation;
        }
        else{
            this.body = {};
        }
        this.original = JSON.stringify(this);
    }

    isValid(): any {
        return this.text != null && this.type != null;
    }
}