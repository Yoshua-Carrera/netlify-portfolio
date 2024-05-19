import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AnilistEffects } from '@core-store/effects/netlify.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from './root-store.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([AnilistEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ]
})
export class NetlifyStoreModule { }
