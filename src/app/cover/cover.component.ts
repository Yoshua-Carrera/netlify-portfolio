import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.sass']
})
export class CoverComponent implements OnInit {
  buttonIcon: string = 'arrow_right_alt'
  @Output() public navigateToggle = new EventEmitter() 
  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  buttonHover(action: string) {
    action === 'enter' ? this.buttonIcon = 'arrow_downward' : this.buttonIcon = 'arrow_right_alt'
  }

  navigateDown() {
    this.navigateToggle.emit()
  }
}
