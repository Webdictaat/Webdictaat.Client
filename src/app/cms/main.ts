import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { AccountService } from '../services/account.service';
import { AppRequestOptions } from './app.options';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);