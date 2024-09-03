import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { netlifyGuard } from './netlify.guard';

describe('netlifyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => netlifyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
