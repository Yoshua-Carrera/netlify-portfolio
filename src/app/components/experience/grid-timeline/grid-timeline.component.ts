import { Component, Input, OnInit } from '@angular/core';
import { ExperienceCopy } from '@core-models/static-copy.model';
import { GridTimelineClass, TimelineTile } from '@core-models/timeline.model';

@Component({
  selector: 'grid-timeline',
  templateUrl: './grid-timeline.component.html',
  styleUrl: './grid-timeline.component.scss'
})
export class GridTimelineComponent implements OnInit {
  @Input() tile: TimelineTile
  @Input() experienceCopy: ExperienceCopy;
  gridClasses: typeof GridTimelineClass = GridTimelineClass;

  ngOnInit(): void {
  }
}
