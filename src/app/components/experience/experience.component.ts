import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, OnInit } from '@angular/core';
import { ExperienceCopy } from '@core-models/static-copy.model';
import { ExperienceCompanies, GridTimelineClass, TimelimeVersions, TimelineTile } from '@core-models/timeline.model';
import { ApplicationToggles } from '@core-models/toggle-config.model';
import { StaticCopyService } from '@core-services/static-copy.service';
import { TimelineGridService } from '@core-services/timeline-grid.service';
import { NetlifyFacade } from '@core-store/facades/netlify-facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  providers: [Window]
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  intersectionObserver: (tagetClass: string) => IntersectionObserver;
  gridClasses: typeof GridTimelineClass = GridTimelineClass;
  experienceCompanies: typeof ExperienceCompanies = ExperienceCompanies;
  timelimeVersions: typeof TimelimeVersions = TimelimeVersions;
  experienceCopy: ExperienceCopy;
  tiles: TimelineTile[];
  window: Window;
  rowHeight: string;
  applicationToggles$: Observable<ApplicationToggles> = this.netlifyFacade.getApplicationToggles$
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(this.window.innerWidth)
    this.rowHeight = this.timelineGridService.calculateRowHeight(this.window.innerWidth)
  }

  ngOnInit(): void {
    this.experienceCopy = this.staticCopyService.getJsonCopy().experience;
    this.tiles = this.timelineGridService.buildGridConfig(
      [
        ExperienceCompanies.CHARTER_COMMUNICATIONS,
        ExperienceCompanies.FAIRFIELD_UNIVERSITY,
        ExperienceCompanies.SICOBRA,
        ExperienceCompanies.CRITERION,
        ExperienceCompanies.CUPON_CITY,
      ],
      'transparent',
      'radio_button_checked',
      4
    );
  }
  ngAfterViewInit(): void {
  }

  constructor(
    private staticCopyService: StaticCopyService,
    private timelineGridService: TimelineGridService,
    private netlifyFacade: NetlifyFacade,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.window = this.document.defaultView
    this.rowHeight = this.timelineGridService.calculateRowHeight(this.window.innerWidth)
  }
}
