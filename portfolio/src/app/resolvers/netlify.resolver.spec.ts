import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { netlifyResolver } from './netlify.resolver';

describe('netlifyResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => netlifyResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
