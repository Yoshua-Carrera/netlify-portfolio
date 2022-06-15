import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  mobileQuery?: MediaQueryList;
  title = 'netlify-portfolio';

  constructor(private scroller: ViewportScroller) {
  }

  navigateDown() {
    this.scroller.scrollToAnchor('mainContainer')
    console.log('hi')
    
  }

}
