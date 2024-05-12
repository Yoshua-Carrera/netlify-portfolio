import { Component, OnInit } from '@angular/core';
import { MainContainerIds } from './models/navigation.models';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title: string = 'netlify-portfolio';
  opened: boolean = true

  ngOnInit(): void {
     
  }

  onSideNavOpen(event: any) {
    console.log('open')
  }

  onSideNavClose(event: any) {
    console.log('close')
  }

  onNavigateDown(target: MainContainerIds) {
    this.scroller.scrollToAnchor(target)
  }

  constructor(private scroller: ViewportScroller) {}
}
