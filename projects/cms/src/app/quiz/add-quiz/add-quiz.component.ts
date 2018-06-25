﻿import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { QuizService } from "core";
import { DictaatService } from "core";
import { BaseModalService, BaseModalComponent } from 'core';
import { ConfigService } from "core";
import { Quiz } from 'core';
import { Question } from 'core';
import { Answer } from 'core';


@Component({
    selector: "wd-add-quiz",
    styleUrls: ['./add-quiz.component.css'],
    templateUrl: "./add-quiz.component.html",
})
export class AddQuizComponent extends  BaseModalComponent implements OnInit {
   

    public quiz: Quiz;
    public selectedQuestion : Question;
    public selectedIndex: number;
    public newAnswerText: string; 
    private  dictaatName: string;

    @Output()
    public onFinished = new EventEmitter();

    constructor(
        private quizService: QuizService,
        private  zone: NgZone,
        private dictaatService: DictaatService,        
    ) {
        super();
    }

    //event
    public ngOnInit(): void {
        this.resetQuiz();
        this.wdOnInit(this.quizService, this.zone);
        this.dictaatService.CurrentDictaat.subscribe((dictaat)=> { if(dictaat) { this.dictaatName = dictaat.name } });       
    }        

    private resetQuiz(){
        this.quiz = new Quiz();  
        this.quiz.questions.push(new Question());
    }

    public Add(): void {
        this.quizService.addQuiz(this.dictaatName, this.quiz)
            .then((quiz: Quiz) => {
                this.onFinished.emit(quiz);
            });
    }


    public Cancel(): void {
        this.resetQuiz();
        this.onFinished.emit();
    }
}

