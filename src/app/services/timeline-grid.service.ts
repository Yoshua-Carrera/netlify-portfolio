import { Injectable } from '@angular/core';
import {
  ExperienceCompanies,
  GridTimelineClass,
  TimelineTile,
} from 'app/models/timeline.model';

@Injectable({
  providedIn: 'root',
})
export class TimelineGridService {
  
  buildGridConfig(
    companies: ExperienceCompanies[],
    color: string,
    icon: string
  ): TimelineTile[] {
    const totalTiles: number = companies.length * 3;
    const companiesDeepCopy: ExperienceCompanies[] = [...companies];
    const timelineTileArray: TimelineTile[] = [];
    let lastClassName: GridTimelineClass;
    for (let index = 0; index < totalTiles; index++) {
      switch (index % 3) {
        case 0:
          timelineTileArray.push({
            company: this.shouldShift(index, lastClassName) ?  companiesDeepCopy.shift(): null,
            color,
            cols: 10,
            rows: 3,
            text: index + '',
            icon,
            className: GridTimelineClass.LEFT_MESSAGE,
          });
          lastClassName = GridTimelineClass.LEFT_MESSAGE
          break;

        case 1:
          timelineTileArray.push({
            company: null,
            color,
            cols: 1,
            rows: 3,
            text: index + '',
            icon,
            className: GridTimelineClass.TIMELINE_SHAPE,
          });
          lastClassName = GridTimelineClass.TIMELINE_SHAPE
          break;

        case 2:
          timelineTileArray.push({
            company: !!(index&5) ? companiesDeepCopy.shift(): null,
            color,
            cols: 10,
            rows: 3,
            text: index + '',
            icon,
            className: GridTimelineClass.RIGHT_MESSAGE,
          });
          if(!!(index&5)) {
            lastClassName = GridTimelineClass.RIGHT_MESSAGE
          }
          break;
      }
    }
    return timelineTileArray;
  }

  private shouldShift(index: number, lastClassName: GridTimelineClass): boolean {
    return !!!(index&5) || lastClassName === GridTimelineClass.RIGHT_MESSAGE
  }

  constructor() {}
}
