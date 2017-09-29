import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wd-blanks',
  templateUrl: './blanks.component.html',
  styleUrls: ['./blanks.component.css']
})
export class BlanksComponent implements OnInit {

  public msg: string = "world";

  constructor() { }

  ngOnInit() {
  }

}
