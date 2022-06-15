import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter()
  @Output() public navigateToggle = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.sidenavToggle.emit()
  }
  
  navigateDown() {
    this.navigateToggle.emit()
  }
}
