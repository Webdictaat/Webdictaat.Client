import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from  '@angular/http';

export class AppRequestOptions extends BaseRequestOptions {

    merge(options?: RequestOptionsArgs): RequestOptions {
        options.url = 'http://localhost:65418/api' + options.url;
        return super.merge(options);
    }
}