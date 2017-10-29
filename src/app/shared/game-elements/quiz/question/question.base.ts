import { Question, TextPart } from "../../../models/quiz/question";
import { Input } from "@angular/core";  

export class Checker
{
  public isChecking : boolean;
  public canCheck: boolean;

  reset(): any {
    this.isChecking = false;
    this.canCheck = false;
  }

}


export class QuestionBase {

    @Input()
    public question: Question;

    @Input()
    public checker: Checker;

    @Input()

    public getParts(text): TextPart[]{
        var epicregex = /(\[\[.*?\]\])/g;
        var response = [];
        text.split(epicregex).forEach((text, i) => {   
            var part = new TextPart();

            //check if empty or null
            if(text == null || text.trim(' ').length == 0) 
                return;

            if(text.match(epicregex)){
                part.type = 'blank';
                part.text = text.slice(2, text.length -2);
            }
            else{
                part.type = 'text';
                part.text = text;
            }        

            response.push(part);
        });
        return response;
    }

    //a shuffle method from stackoveflow: 
    //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    public shuffle(array): any[] {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

}