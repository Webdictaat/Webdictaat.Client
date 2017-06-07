import { Component, EventEmitter, Input } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DictaatService } from "../../shared/services/dictaat.service";
import { Dictaat } from "../../shared/models/dictaat";

@Component({
    selector: "wd-settings-dictaat",
    templateUrl: "./settings-dictaat.component.html",
})
export class DictaatSettingsComponent {

  private dictaat: Dictaat;

  constructor(private dictaatService: DictaatService) { }

  ngOnInit() {
      this.dictaatService.CurrentDictaat
      .subscribe((dictaat) => {
          this.dictaat = dictaat;
      });
  }


}