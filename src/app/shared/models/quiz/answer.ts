export class Answer{
    public id: number;
    public text: string;
    public isCorrect: boolean;

    constructor(json = null){
        if(json){
            this.id = json.id;
            this.text = json.text;
            this.isCorrect = json.isCorrect;
        }
    }


    toggle(): void {
        this.isCorrect = !this.isCorrect;
    }
}