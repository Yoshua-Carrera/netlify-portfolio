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
    icon: string,
    rowHeight: number = 3
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
            rows: rowHeight,
            text: index + '',
            className: GridTimelineClass.LEFT_MESSAGE,
          });
          lastClassName = GridTimelineClass.LEFT_MESSAGE
          break;

        case 1:
          timelineTileArray.push({
            company: null,
            color,
            cols: 1,
            rows: rowHeight,
            text: index + '',
            startIcon: index%2 ? icon : null,
            endIcon: (index%2 || index === totalTiles-2) ? icon : null,
            className: GridTimelineClass.TIMELINE_SHAPE,
          });
          lastClassName = GridTimelineClass.TIMELINE_SHAPE
          break;

        case 2:
          timelineTileArray.push({
            company: !!(index&5) ? companiesDeepCopy.shift(): null,
            color,
            cols: 10,
            rows: rowHeight,
            text: index + '',
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

  calculateRowHeight(screenWidth: number): string {
    switch(true) {
      case screenWidth < 375:
        return `14rem`
      case screenWidth < 500:
        return `12rem`
      case screenWidth < 600:
        return `9rem`
      case screenWidth < 800:
        return `7rem`
      case screenWidth < 900:
        return `6rem`
      default:
        return `5rem`
    }
  }

  private shouldShift(index: number, lastClassName: GridTimelineClass): boolean {
    return !!!(index&5) || lastClassName === GridTimelineClass.RIGHT_MESSAGE
  }

  constructor() {}
}
