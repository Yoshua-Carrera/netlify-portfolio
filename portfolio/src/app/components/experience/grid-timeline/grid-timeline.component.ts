import { Component, Input, OnInit } from '@angular/core';
import { ExperienceCopy } from '@core-models/static-copy.model';
import { GridTimelineClass, TimelineTile } from '@core-models/timeline.model';
import { TimelineCardComponent } from '../timeline-card/timeline-card.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'grid-timeline',
  templateUrl: './grid-timeline.component.html',
  styleUrl: './grid-timeline.component.scss',
  imports: [TimelineCardComponent, CommonModule, MatIconModule],
  standalone: true
})
export class GridTimelineComponent implements OnInit {
  @Input() tile: TimelineTile
  @Input() experienceCopy: ExperienceCopy;
  gridClasses: typeof GridTimelineClass = GridTimelineClass;

  ngOnInit(): void {
  }
}
