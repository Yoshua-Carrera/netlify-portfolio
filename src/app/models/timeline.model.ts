export interface TimelineTile {
    color: string;
    cols: number;
    rows: number;
    text: string;
    className: GridTimelineClass;
    startIcon?: string;
    endIcon?: string;
    company?: ExperienceCompanies;
  }

export enum GridTimelineClass {
  LEFT_MESSAGE='left-message',
  RIGHT_MESSAGE='right-message',
  TIMELINE_SHAPE='timeline-shape',
}

export enum ExperienceCompanies {
  SICOBRA='sicobra',
  CUPON_CITY='cuponCity',
  FAIRFIELD_UNIVERSITY='fairfieldUniversity',
  CHARTER_COMMUNICATIONS='charterCommunications',
}