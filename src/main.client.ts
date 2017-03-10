import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ClientsModule } from './app/client/app.module';
import { environment } from './environments/environment';

import 'jquery';
import 'jquery-ui';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ClientsModule);
