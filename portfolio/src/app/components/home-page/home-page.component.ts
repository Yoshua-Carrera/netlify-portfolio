import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainContainerIds } from '../../models/navigation.model';
import { ButtonHoverActions, CoverbuttonIcons } from 'app/models/cover.model';
import { StaticCopyService } from '@core-services/static-copy.service';
import { CoverCopy } from 'app/models/static-copy.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true
})
export class HomePageComponent implements OnInit {
  @Output() public navigateToggle = new EventEmitter<MainContainerIds>()
  MainContainerIds: typeof MainContainerIds = MainContainerIds
  buttonHoverActions: typeof ButtonHoverActions = ButtonHoverActions
  buttonIcon?: string;
  coverCopy: CoverCopy

  ngOnInit(): void {
    this.coverCopy = this.staticCopyService.getJsonCopy().cover
  }

  buttonHover(action: string) {
    action === ButtonHoverActions.ENTER ? this.buttonIcon = CoverbuttonIcons.ARROW_DOWNWARD : this.buttonIcon = CoverbuttonIcons.ARROW_RIGHT_ALT
  }

  navigateDown(mainContainerIds: MainContainerIds) {
    this.navigateToggle.emit(mainContainerIds)
  }

  constructor(private staticCopyService: StaticCopyService) { }
}
