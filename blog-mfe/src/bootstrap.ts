import { AppModuleMfe } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModuleMfe)
  .catch(err => console.error(err));
