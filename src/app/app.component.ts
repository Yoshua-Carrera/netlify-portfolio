import { Component, OnInit } from '@angular/core';
import { MainContainerIds } from './models/navigation.model';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title: string = 'netlify-portfolio';
  sideMenuOpen: boolean = false

  ngOnInit(): void {
     
  }

  onSideNavOpen(event: any) {
    console.log('open')
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('no-scroll-y');
  }

  onSideNavClose(event: any) {
    console.log('close')
    this.sideMenuOpen = false
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('no-scroll-y');
  }

  onNavigateDown(target: MainContainerIds) {
    this.scroller.scrollToAnchor(target)
  }

  constructor(private scroller: ViewportScroller) {}
}
