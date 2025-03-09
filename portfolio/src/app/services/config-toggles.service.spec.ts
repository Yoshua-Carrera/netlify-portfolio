import { TestBed } from '@angular/core/testing';

import { ConfigTogglesService } from './config-toggles.service';

describe('ConfigTogglesService', () => {
  let service: ConfigTogglesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigTogglesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
