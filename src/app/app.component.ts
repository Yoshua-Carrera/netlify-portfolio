import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MainContainerIds } from './models/navigation.model';
import { ViewportScroller } from '@angular/common';
import { Observable, timer } from 'rxjs';
import { NetlifyFacade } from '@core-store/facades/netlify-facade';
import { HeaderNavigationData } from '@core-models/static-copy.model';
import { StaticCopyService } from '@core-services/static-copy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  intersectionObserver: (tagetClass?: string) => IntersectionObserver;
  parentIntersectionObserver: () => IntersectionObserver;
  contactDialogueTimer: Observable<number> = timer(1000, 1000);
  title: string = 'netlify-portfolio';
  sideMenuOpen: boolean = false
  contactElement: NodeListOf<Element>;
  fadeInElements: NodeListOf<Element>;
  underlineElements: NodeListOf<Element>;
  timelineElements: NodeListOf<Element>;
  getParentContainers: NodeListOf<Element>;
  headerLinks: HeaderNavigationData[];

  ngOnInit(): void {
    this.intersectionObserver = (tagetClass?: string) => new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add(tagetClass)
        }
      })
    })
    this.parentIntersectionObserver = () => new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if(entry.isIntersecting) {
          document.getElementsByClassName(`mat-h1 glow ${entry.target.id}`)?.[0].classList.add('active')
        } else {
          document.getElementsByClassName(`mat-h1 glow ${entry.target.id}`)?.[0].classList.remove('active')          
        }
      })
    })
    this.headerLinks = [
      this.staticCopyService.getJsonCopy().header.about,
      this.staticCopyService.getJsonCopy().header.experience,
      this.staticCopyService.getJsonCopy().header.projects,
      this.staticCopyService.getJsonCopy().header.contact,
    ]
  }

  ngAfterViewInit(): void {
    this.contactElement = document.querySelectorAll('.contact-container')
    this.fadeInElements = document.querySelectorAll('.watch--fade--in')
    this.underlineElements = document.querySelectorAll('.mat-headline-2')
    this.getParentContainers = document.querySelectorAll('.parent--container')
    this.getParentContainers.forEach((element: Element) => this.parentIntersectionObserver().observe(element))
    this.contactElement.forEach((element: Element) => this.intersectionObserver().observe(element))
    this.fadeInElements.forEach((element: Element) => this.intersectionObserver('fade--in-effect').observe(element))
    this.underlineElements.forEach((element: Element) => this.intersectionObserver('undeline--effect').observe(element))
  }


  onSideNavOpen(_: any) {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('no-scroll-y');
  }

  onSideNavClose(_: any) {
    this.sideMenuOpen = false
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('no-scroll-y');
  }

  onNavigateDown(target: MainContainerIds | string) {
    this.scroller.scrollToAnchor(target)
  }

  constructor(private scroller: ViewportScroller, private netlifyFacade: NetlifyFacade, private staticCopyService: StaticCopyService) {}
}
