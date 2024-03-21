 import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
// import { AppModule } from './app/app.module';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

 platformBrowserDynamic().bootstrapModule(AppModule)
   .catch((err:any) => console.error(err));
