import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainContainerIds } from '../../models/navigation.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  @Output() public navigateToggle = new EventEmitter<MainContainerIds>()
  MainContainerIds: typeof MainContainerIds = MainContainerIds
  buttonIcon?: string;
  
  ngOnInit(): void {}

  buttonHover(action: string) {
    action === 'enter' ? this.buttonIcon = 'arrow_downward' : this.buttonIcon = 'arrow_right_alt'
  }

  navigateDown(mainContainerIds: MainContainerIds) {
    this.navigateToggle.emit(mainContainerIds)
  }
}
