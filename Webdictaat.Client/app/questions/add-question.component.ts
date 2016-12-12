import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef  } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { QuestionsService } from '../services/question.service';
import { DictaatService } from '../services/dictaat.service';


import { Question } from '../models/question';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: "wd-add-question",
    templateUrl: "./app/questions/add-question.component.html",
})
export class AddQuestionComponent implements OnInit   {

    private dictaatName: string;

    public isModalVisible: boolean;
    public question: Question;
  
    @Output()
    public questionAdded = new EventEmitter();

    constructor(
        private questionsService: QuestionsService,
        private route: ActivatedRoute,
        private changeDetector: ChangeDetectorRef
    ) {}

    //event
    public ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.dictaatName = params['dictaatName'];
        });

        this.questionsService.getIsModalVisible().subscribe((isModalVisible: boolean) => {
            this.isModalVisible = isModalVisible;
            if (isModalVisible) {
                this.question = new Question();  
                this.changeDetector.detectChanges();
            }
          
        });
    }

    public Add(): void {
    
        this.questionsService.addQuestion(this.dictaatName, this.question)
            .then((question: Question) => {
                this.questionsService.HideAddQuestionModal();
            });
    }

    public Cancel(): void {
        this.questionsService.HideAddQuestionModal();
    }
}

