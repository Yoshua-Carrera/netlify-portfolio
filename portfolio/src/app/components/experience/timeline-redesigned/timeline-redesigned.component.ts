import { Component, Input, OnInit } from '@angular/core';
import { ExperienceCopy } from '@core-models/static-copy.model';
import { TimelineTile } from '@core-models/timeline.model';
import { TimelineCardComponent } from '../timeline-card/timeline-card.component';

@Component({
  selector: 'timeline-redesigned',
  templateUrl: './timeline-redesigned.component.html',
  styleUrl: './timeline-redesigned.component.scss',
  imports: [TimelineCardComponent],
  standalone: true
})
export class TimelineRedesignedComponent implements OnInit {
  @Input() tile: TimelineTile
  @Input() experienceCopy: ExperienceCopy;

  ngOnInit(): void {

  }

}
