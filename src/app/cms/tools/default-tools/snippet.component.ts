import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: "wd-snippet-tool",
    template: `<div id='wd-snippet-tool' class='wd-component'>
    <i class="fa fa-code" aria-hidden="true"></i> Codesnippet
    </div>`
})
export class SnippetComponent {

    public ngOnInit(): void {
        var component = this;
        $('#wd-snippet-tool').draggable({
            helper: "clone",
            connectToSortable: ".wd-container",
            start: function (e, ui) {
                ui.helper.data("component", component);
            }
        })
    }

    //returns a promise with a boolean, to recompile or not
    public onDrop(ui): Promise<boolean> {

        return new Promise((resolve, reject) => {
            var newItem = $(`
                <div class='wd-component'>
                    <pre class='line-numbers'>
                        <code class='language-csharp'><div class='wd-editable'></div></code>
                    </pre>
                </div>`);

            ui.item.replaceWith(newItem);
            ui.item = newItem;
            resolve(false);
        });

    }
}

