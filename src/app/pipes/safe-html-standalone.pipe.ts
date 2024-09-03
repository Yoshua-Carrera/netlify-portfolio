import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtmlStandalone',
  standalone: true
})
export class SafeHtmlPipeStandalone implements PipeTransform {

  transform(html: string): unknown {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  constructor(private sanitizer: DomSanitizer) {}
}
