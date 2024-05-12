import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  @Output() navBarClicked: EventEmitter<void>= new EventEmitter<void>()
  ngOnInit(): void {
  }

  onNavBarClicked(event: any) {
    this.navBarClicked.emit()
  }
}
