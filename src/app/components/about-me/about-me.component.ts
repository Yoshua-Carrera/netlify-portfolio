import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StaticCopyService } from '@core-services/static-copy.service'
import { AboutMeCopy } from '../../models/static-copy.model';
import { techStack } from 'app/models/keyword-seo.model';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  aboutMeCopy: AboutMeCopy
  carouselContent: string[] = [techStack, techStack, techStack, techStack].flatMap((item) => [item, item, item, item, item]).flat()

  ngOnInit(): void {
    this.aboutMeCopy = this.staticCopyService.getJsonCopy().aboutMe
  }

  constructor(private staticCopyService: StaticCopyService) {}
}