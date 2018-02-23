import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wd-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  public selectedOption = null;
  public isSubmitting = false;

  public poll = {
    question: "Did you finish reading all the articles and assignmennts?",
    options: [
      { text: 'I finished all the articles and assignments!', percentage: 42, },
      { text: 'I made most of my homework', percentage: 22,},
      { text: 'I started but did not finish all the work', percentage: 27},
      { text: 'I did not look at any of the subjects', percentage: 12}
    ],
    myVote: null,
  }

  public getColor(index){
    if(this.poll)
    {
      var value = 256 - (256 / this.poll.options.length + 1) * (index + 1); 
      return "rgb(" + (value) + ", " + 22 + ", " + 22  + ")";
    }
  }

  constructor() { }

  ngOnInit() {
  }

  public isSelected(option){
    return option == this.selectedOption;
  }

  public vote(){
    if(!this.isSubmitting){
      this.poll.myVote = this.selectedOption;
    }
  }


}
