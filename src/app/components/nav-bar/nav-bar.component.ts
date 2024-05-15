import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StaticCopyService } from '@core-services/static-copy.service';
import { MaterialIcons } from 'app/models/material.model';
import { headerCopy } from 'app/models/static-copy.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  @Output() navBarClicked: EventEmitter<void>= new EventEmitter<void>()
  materialIcons: typeof MaterialIcons = MaterialIcons
  headerCopy: headerCopy;

  ngOnInit(): void {
    this.headerCopy = this.staticCopyService.getJsonCopy().header
  }

  onNavBarClicked(event: any) {
    this.navBarClicked.emit()
  }

  constructor(private staticCopyService: StaticCopyService) {}
}
