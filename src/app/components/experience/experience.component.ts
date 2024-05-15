import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, OnInit } from '@angular/core';
import { StaticCopyService } from '@core-services/static-copy.service';
import { TimelineGridService } from '@core-services/timeline-grid.service';
import { ExperienceCopy } from 'app/models/static-copy.model';
import { ExperienceCompanies, GridTimelineClass, TimelineTile } from 'app/models/timeline.model';

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
  timelineElements: NodeListOf<Element>;
  experienceCopy: ExperienceCopy;
  tiles: TimelineTile[];
  window: Window;
  rowHeight: string;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.rowHeight = this.timelineGridService.calculateRowHeight(this.window.innerWidth)
  }

  ngOnInit(): void {
    this.experienceCopy = this.staticCopyService.getJsonCopy().experience;
    this.tiles = this.timelineGridService.buildGridConfig(
      [
        ExperienceCompanies.SICOBRA,
        ExperienceCompanies.CUPON_CITY,
        ExperienceCompanies.FAIRFIELD_UNIVERSITY,
        ExperienceCompanies.CHARTER_COMMUNICATIONS,
      ],
      'transparent',
      'radio_button_checked',
      4
    );
    this.intersectionObserver = (tagetClass: string) => new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add(tagetClass)
        }
      })
    })
  }
  ngAfterViewInit(): void {
    this.timelineElements = document.querySelectorAll('.timeline-card')
    this.timelineElements.forEach((element: Element) => this.intersectionObserver('fade--in-effect').observe(element))
  }

  constructor(
    private staticCopyService: StaticCopyService,
    private timelineGridService: TimelineGridService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.window = this.document.defaultView
    this.rowHeight = this.timelineGridService.calculateRowHeight(this.window.innerWidth)
  }
}
