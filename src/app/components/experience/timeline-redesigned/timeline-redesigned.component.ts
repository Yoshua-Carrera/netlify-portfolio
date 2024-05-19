import { Component, Input, OnInit } from '@angular/core';
import { ExperienceCopy } from '@core-models/static-copy.model';
import { TimelineTile } from '@core-models/timeline.model';

@Component({
  selector: 'timeline-redesigned',
  templateUrl: './timeline-redesigned.component.html',
  styleUrl: './timeline-redesigned.component.scss'
})
export class TimelineRedesignedComponent implements OnInit {
  @Input() tile: TimelineTile
  @Input() experienceCopy: ExperienceCopy;

  ngOnInit(): void {
    
  }

}
