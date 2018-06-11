import { Component } from '@angular/core';
import { Quiz } from '../models/quiz/quiz';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
    selector: "wd-process-token",
    template: `
    <div class="container-fluid">
        <p > Logging in...</p>
    </div>
`,
})
export class ProcessTokenComponent {


    constructor(
        private activatedRoute: ActivatedRoute, 
        private accountService: AccountService,
        private router: Router) {}
    
      ngOnInit() {

        // subscribe to router event
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            let token = params['token'];
            this.accountService.SetToken(token);
            this.router.navigateByUrl('/');
          });
      }
}