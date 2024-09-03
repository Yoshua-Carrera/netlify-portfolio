import { Component, OnInit } from '@angular/core';
import { StaticCopyService } from '@core-services/static-copy.service'
import { AboutMeCopy } from '../../models/static-copy.model';
import { techStack } from 'app/models/keyword-seo.model';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipeStandalone } from 'app/pipes/safe-html-standalone.pipe';

@Component({
  selector: 'about-me-standalone',
  templateUrl: './about-me-standalone.component.html',
  styleUrl: './about-me-standalone.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    SafeHtmlPipeStandalone
  ],
})
export class AboutMeComponentStandalone implements OnInit {
  aboutMeCopy: AboutMeCopy
  carouselContent: string[] = [techStack, techStack, techStack, techStack].flatMap((item) => [item, item, item, item, item]).flat()

  ngOnInit(): void {
    this.aboutMeCopy = this.staticCopyService.getJsonCopy().aboutMe
  }

  constructor(private staticCopyService: StaticCopyService) {}
}