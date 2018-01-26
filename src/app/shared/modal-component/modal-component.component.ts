import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'wd-modal',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {

  @Input()  public isVisible: boolean;
  @Input()  public config: any;

  @Output() public onComplete = new EventEmitter();
  @Output() public onCancel = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if(!this.config)
      this.config = {};
  }

  public cancel(){
    this.isVisible = false;
    this.onCancel.emit(null);
  }

  public complete(){
    this.onComplete.emit(null);
  }

}
