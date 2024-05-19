import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { take } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.sass']
})
export class CoverComponent implements OnInit {
  buttonIcon: string = 'arrow_right_alt'
  // projectData: any
  @Output() public navigateToggle = new EventEmitter() 
  constructor(private scroller: ViewportScroller, private dataS: DataService) { }

  ngOnInit(): void {
    // this.dataS.projectOBS$.pipe(take(1)).subscribe((data: any) => {
    //   this.projectData = data
    // })
  }

  buttonHover(action: string) {
    action === 'enter' ? this.buttonIcon = 'arrow_downward' : this.buttonIcon = 'arrow_right_alt'
  }

  navigateDown() {
    this.navigateToggle.emit()
  }
}
