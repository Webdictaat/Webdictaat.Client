import { Component, OnInit } from '@angular/core';
import { Dictaat, DictaatMarkings } from "../../shared/models/dictaat";
import { DictaatService } from "../../shared/services/dictaat.service";

@Component({
  selector: 'wd-marking',
  templateUrl: './marking.component.html',
  styleUrls: ['./marking.component.css']
})
export class MarkingComponent implements OnInit {

  public markings : DictaatMarkings;
  public filterArg: any = {
    property: 'email'
  }
  public filterArgb: any = {
    property: 'metadata'
  }


  private dictaat: Dictaat;

  constructor(private dictaatService: DictaatService) { }

  ngOnInit() {
      this.dictaatService.CurrentDictaat
      .subscribe((dictaat) => {
          if(!dictaat) return;
          this.dictaat = dictaat;
          this.dictaatService.getMarkings(dictaat.name)
            .then((markings) => {
                this.markings = markings; 
            })
      });
  }
}
