import { Component } from '@angular/core';

@Component({
    selector: "wd-demo",
    template: `
    <div class="container-fluid">
        <h2>Demo project </h2>
        <wd-achievements></wd-achievements>
        <!--<grid-matrix [Rows]="rows" [cols]="Cols"></grid-matrix>-->
    </div>
`,
})
export class DemoComponent {
    public rows = ["meep", "moop"];
    public cols = ["achiev1", "achiev2", "achiev3"];
}