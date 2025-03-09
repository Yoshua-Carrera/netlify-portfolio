import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { MainContainerIds } from '@core-models/navigation.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  standalone: false
})
export class LandingPageComponent {

  constructor(private scroller: ViewportScroller) { }

  onNavigateDown(target: MainContainerIds | string) {
    this.scroller.scrollToAnchor(target);
  }
}
