import { Answer } from "./answer";  

export class TextPart{
    public text: string;
    public type: string;
}

export class Question{
    
    public id: number;
    public text: string;
    public answers: Answer[];
    public selectedAnswers: Answer[];
    private original: string;
    public type: string; 
    public explanation: string;
    public isCorrect : boolean;

    constructor(json = null){
        this.answers = [];
        if(json){
            this.id = json.id;
            this.text = json.text;
            json.answers.forEach(a => {
                this.answers.push(new Answer(a));
            })
        }
        this.original = JSON.stringify(this);
    }

    RemoveAnswer(answer: Answer): void {
        var index = this.answers.indexOf(answer);
        this.answers.splice(index, 1) 
    }

    public isValid(){
        let response : boolean = (this.text && this.answers.length > 1);
        return response;
    }
}