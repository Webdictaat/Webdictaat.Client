import { Component, OnInit } from '@angular/core';
import { Dictaat, DictaatMarkings } from "../../shared/models/dictaat";
import { DictaatService } from "../../shared/services/dictaat.service";

@Component({
  selector: 'wd-marking',
  templateUrl: './marking.component.html',
  styleUrls: ['./marking.component.css']
})
export class MarkingComponent implements OnInit {

  public limit: number = 25;
  public markings : DictaatMarkings;
  public f_participants: any[] = [];

  public participantFilter: any = {
    property: 'group'
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
          this.retrieveFilter();
          this.dictaatService.getMarkings(dictaat.name)
            .then((markings) => {
                this.markings = markings; 
                this.filter();
            })
      });
  }

  public filter(): any{

      this.limit = 25;
      var prop = this.participantFilter.property;
      var value = this.participantFilter.value;
      this.storeFilter();

      if(!value) return this.f_participants = this.markings.participants;

      this.f_participants =  this.markings.participants.filter(item => {
          if(item[prop]){
              return this.ItemWithpropertyContains(item, prop, value);
          }
      });
  }

  //a small helper method
  private ItemWithpropertyContains(item: any, prop: string, value: string): boolean{
      var values = value.split(',');
      var contains = false;
      values.forEach(v => {
          v = v.trim();
          if(item[prop].toUpperCase().indexOf(v.toUpperCase()) !== -1){
            contains = true;
          }
      });
      return contains;
  }

  private storeFilter(): void{
     var value = this.participantFilter.value ? this.participantFilter.value : "";
     localStorage[this.dictaat.name + ".participantFilter"] = value;
  }

  private retrieveFilter(): void{
     this.participantFilter.value = localStorage[this.dictaat.name+ ".participantFilter"];
  }
}
