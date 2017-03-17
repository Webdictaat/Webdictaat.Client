
import { Injectable } from "@angular/core";


@Injectable()
export class HtmlService {

    private html : string;
    private element: any;

    public Compile(element: any): any{
        this.element = element;
    }

    public Decompile(html: string): string{
        return html;
    }

    //compile methods
    private enableSortable(): HtmlService{
        return this;
    }

    private enableEditable(): HtmlService{
        return this;
    }

    private enableCKEditor(): HtmlService{
        return this;
    }



}

