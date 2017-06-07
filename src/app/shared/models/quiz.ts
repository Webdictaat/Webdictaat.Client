export class Quiz{

    constructor(json = null){
        this.questions = [];
        if(json){
            json.questions.forEach(q => {
                this.questions.push(new Question(q));
            })
            this.dictaat = json.dictaat;
            this.title = json.title;
            this.description = json.description;
            this.status = json.status;
            this.id = json.id;
            this.myAttempts = json.myAttempts ? json.myAttempts : [];
        }
        else{
            //start with 1 question
            this.questions.push(new Question());

        }
       
    }


    public id: number;
    public dictaat: String;
    public title: string;
    public description: string;
    public status : string;
    public questions: Question[];
    public myAttempts: Attempt[];

    public isValid() : boolean{
        let response : boolean = (this.title && this.description && this.questions.length >= 1);
        this.questions.forEach(question => {
            if(!question.isValid()){
                response = false; 
            }
        })
        return response;
    }

    public getLastAttempt(): Attempt{
        if(this.myAttempts && this.myAttempts.length > 0)
            return this.myAttempts[0];
        else
            return null;
    }
}

export class QuizSummary{
    public id: number;
    public dictaat: String;
    public title: string;
    public description: string;
    public questionCount: number;
    public completedByCount: number;
}

export class Attempt{
    public quizId : number;
    public timestamp : Date;
    public answers: number[];
    public correctAnswers: number;
}

export class Question{

    private original: string;

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

    public id: number;
    public text: string;
    public answers: Answer[];
    public selectedAnswer: Answer;

    RemoveAnswer(answer: Answer): void {
        var index = this.answers.indexOf(answer);
        this.answers.splice(index, 1) 
    }

    public isValid(){
        let response : boolean = (this.text && this.answers.length > 1);
        return response;
    }

}

export class Answer{
    public id: number;
    public text: string;
    public isCorrect: boolean;

    constructor(json = null){
        this.id = json.id;
        this.text = json.text;
        this.isCorrect = json.isCorrect;
    }

    toggle(): void {
        this.isCorrect = !this.isCorrect;
    }
}