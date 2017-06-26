import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: "grid-matrix",
    template: `
        <div>
            <p>meep</p>
            <table>
                <div *ngFor='let col of Cols'>
                    
                </div>
            </table>
        </div>
    `,
})

export class GridMatrixComponent {
    @Input() Rows: Array;
    @Input() Cols: Array;
    @Output() Action: EventEmitter<string>;

    public constructor() {
        this.Action = new EventEmitter();
    }


}