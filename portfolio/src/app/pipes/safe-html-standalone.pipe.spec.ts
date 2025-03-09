import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipeStandalone } from './safe-html-standalone.pipe';
import { SafeHtmlPipe } from './safe-html.pipe';
import { TestBed } from '@angular/core/testing';

describe('SafeHtmlPipeStandalone', () => {
  let domSanitizer: DomSanitizer;
  beforeEach(() => {
    domSanitizer = TestBed.inject(DomSanitizer)
  });
  it('create an instance', () => {
    const pipe = new SafeHtmlPipeStandalone(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
