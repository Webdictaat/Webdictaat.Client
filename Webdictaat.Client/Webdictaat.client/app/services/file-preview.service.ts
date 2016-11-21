import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subject }    from 'rxjs/Subject';

import { Page } from '../models/page';
import { PageSummary } from '../models/page-summary';
import { Dictaat } from '../models/dictaat';


@Injectable()
export class FilePreviewService {

    // Observable string sources
    private selectedFileSource = new Subject<Page>();

    constructor(private http: Http) { }

    // Observable string streams
    public selectedFile$ = this.selectedFileSource.asObservable();

    private dictatenUrl = 'http://localhost:65418/api/dictaten/';

    public selectFile(dictaatName: string, fileEntry: PageSummary): void {
        this.http.get(this.dictatenUrl + dictaatName + "/pages/" + fileEntry.name)
            .toPromise()
            .then(response => {
                this.selectedFileSource.next(response.json());
            }).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    

    public clearSelection(): void {
        this.selectedFileSource.next(null);
    }
}