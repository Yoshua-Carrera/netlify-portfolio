import { Component, Input, OnInit } from '@angular/core';
import { ExperienceCopy } from '@core-models/static-copy.model';
import { TimelimeVersions, TimelineTile } from '@core-models/timeline.model';
import { ApplicationToggles } from '@core-models/toggle-config.model';
import { NetlifyFacade } from '@core-store/facades/netlify-facade';
import { SafeHtmlPipe } from 'app/pipes/safe-html.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrl: './timeline-card.component.scss',
})
export class TimelineCardComponent implements OnInit {
  @Input() experienceCopy: ExperienceCopy
  @Input() tile: TimelineTile
  version: typeof TimelimeVersions = TimelimeVersions
  applicationToggles$: Observable<ApplicationToggles> = this.netlifyFacade.getApplicationToggles$
  ngOnInit(): void {
  }

  constructor(private netlifyFacade: NetlifyFacade) {}
}
