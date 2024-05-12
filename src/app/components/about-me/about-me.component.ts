import { Component, OnInit } from '@angular/core';
import { StaticCopyService } from '@core-services/static-copy.service'
import { AboutMeCopy } from '../../models/static-copy.model';
import { techStack } from 'app/models/keyword-seo.model';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {
  intersectionObserver: (tagetClass: string) => IntersectionObserver;
  fadeInElements: NodeListOf<Element>;
  underlineElements: NodeListOf<Element>;
  aboutMeCopy: AboutMeCopy
  carouselContent: string[] = [techStack, techStack].flatMap((item) => [item, item, item, item, item]).flat()

  ngOnInit(): void {
    this.aboutMeCopy = this.staticCopyService.getJsonCopy().aboutMe
    this.fadeInElements = document.querySelectorAll('.watch--fade--in')
    this.underlineElements = document.querySelectorAll('.mat-headline-2')
    this.intersectionObserver = (tagetClass: string) => new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        console.log(entry)
        if(entry.isIntersecting) {
          entry.target.classList.add(tagetClass)
        }
      })
    })
    this.fadeInElements.forEach((element: Element) => this.intersectionObserver('fade--in-effect').observe(element))
    this.underlineElements.forEach((element: Element) => this.intersectionObserver('undeline--effect').observe(element))
  }

  constructor(private staticCopyService: StaticCopyService) {}
}