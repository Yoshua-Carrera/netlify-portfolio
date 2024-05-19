import { Injectable } from '@angular/core';
import { ApplicationToggles } from '@core-models/toggle-config.model';
import { NetlifyFacade } from '@core-store/facades/netlify-facade';

@Injectable({
  providedIn: 'root'
})
export class ConfigTogglesService {

  constructor(private netlifyFacade: NetlifyFacade) { }

  loadToggleConfig(toggleConfig: ApplicationToggles): void {
    this.netlifyFacade.loadToggleConfig(toggleConfig)
  }
}
