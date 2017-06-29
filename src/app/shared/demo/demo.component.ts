import { Component } from '@angular/core';

@Component({
    selector: "wd-demo",
    template: `
    <div class="container-fluid">
        <h2>Demo project </h2>
        <!--<wd-achievements></wd-achievements>-->
        <wd-achievement-marking></wd-achievement-marking>
    </div>
`,
})
export class DemoComponent {
}