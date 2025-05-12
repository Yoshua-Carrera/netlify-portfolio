import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { APP_ROUTES } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { rootReducer } from '@core-store/root-store.reducer';
import { AnilistEffects } from '@core-store/effects/netlify.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(APP_ROUTES),
    provideStore(rootReducer),
    provideEffects([AnilistEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: isDevMode() }),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
};