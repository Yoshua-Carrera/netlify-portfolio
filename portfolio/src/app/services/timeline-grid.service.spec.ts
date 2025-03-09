import { TestBed } from '@angular/core/testing';

import { TimelineGridService } from './timeline-grid.service';

describe('TimelineGridService', () => {
  let service: TimelineGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelineGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
