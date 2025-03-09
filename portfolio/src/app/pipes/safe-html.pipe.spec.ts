import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';
import { TestBed } from '@angular/core/testing';

describe('SafeHtmlPipe', () => {
  let domSanitizer: DomSanitizer;
  beforeEach(() => {
    domSanitizer = TestBed.inject(DomSanitizer)
  });
  it('create an instance', () => {
    const pipe = new SafeHtmlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
