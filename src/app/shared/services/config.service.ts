import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Router} from '@angular/router';
import { BehaviorSubject } from "rxjs/rx";
import { Observable } from 'rxjs/Observable';


export class DictaatConfig{
    public name: string;
}

@Injectable()
export class ConfigService {

    public Config : BehaviorSubject<DictaatConfig> = new BehaviorSubject<DictaatConfig>(null);
    public DictaatName : BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor(private https: Http){    
      
    }

    public GetLocalConfig(): Observable<DictaatConfig>{
        this.http.get('dictaat.config.json')
        .subscribe((response) => {
            this.Config.next(response.json() as DictaatConfig);   
            this.DictaatName.next(this.Config.value.name);
        });

        return this.Config;
    }

    public SetLocalConfig(config: DictaatConfig): void{
         this.Config.next(config);
         this.DictaatName.next(config.name);
    }

    


} 