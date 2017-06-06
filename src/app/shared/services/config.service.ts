import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router} from '@angular/router';
import { BehaviorSubject } from "rxjs/rx";


export class DictaatConfig{
    public name: string;
}

@Injectable()
export class ConfigService {

    public Config : BehaviorSubject<DictaatConfig> = new BehaviorSubject<DictaatConfig>(null);

    constructor(private http: Http){    
      
    }

    public GetLocalConfig(): void{
        this.http.get('dictaat.config.json')
        .toPromise()
        .then((response) => {
            this.Config.next(response.json() as DictaatConfig);
        });
    }

    public SetLocalConfig(config: DictaatConfig): void{
         this.Config.next(config);
    }

    


} 