import { Component } from '@angular/core';

@Component({
    selector: "wd-demo",
    template: `
    <div class="container-fluid">
        <h2>Demo project </h2>   
        <wd-achievement-marking></wd-achievement-marking>
        <wd-achievements></wd-achievements>
    </div>
`,
})
export class DemoComponent {
}