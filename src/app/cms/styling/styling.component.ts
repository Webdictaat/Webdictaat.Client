import { Component, OnInit } from '@angular/core';
import { DictaatService } from '../../shared/services/dictaat.service';
import 'codemirror/mode/css/css'
import { StylingService } from '../../shared/services/styling.service';


@Component({
  selector: 'wd-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.css']
})
export class StylingComponent implements OnInit {

  public css : string;

  private dictaatName: string;

  constructor(
    private stylingSerevice: StylingService,
    private dictaatService: DictaatService,
  ) {}

  public codeconfig : any = { 
    lineNumbers: true,
    mode: "text/css"
  };



  ngOnInit() {  
    this.dictaatService.CurrentDictaat
      .subscribe((dictaat) => {

          if(dictaat){
            this.dictaatName = dictaat.name;
            this.getCustomStyle();
          }
        
    });
  }

  private getCustomStyle()
  {
    this.stylingSerevice.getStyle(this.dictaatName, "custom")
      .then((css) => {
        this.css = css;
      });
  }
  
  public saveStyle(css: string){
      this.css = null;
      this.stylingSerevice.updateStyle(this.dictaatName, "custom", css)
      .then((css) => {
        console.log("response");
        this.css = css;
      });
  }
  

}
