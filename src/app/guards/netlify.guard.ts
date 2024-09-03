import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ApplicationToggles } from '@core-models/toggle-config.model';
import { NetlifyFacade } from '@core-store/facades/netlify-facade';
import { map, Observable } from 'rxjs';

export const netlifyGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const netlifyFacade: NetlifyFacade = inject(NetlifyFacade)
  return netlifyFacade.getApplicationToggles$.pipe(
    map((toggles: ApplicationToggles) => toggles.multipleRoutes)
  )};
