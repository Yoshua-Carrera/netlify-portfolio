import { TestBed } from '@angular/core/testing';

import { StaticCopyService } from './static-copy.service';

describe('StaticCopyService', () => {
  let service: StaticCopyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticCopyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
