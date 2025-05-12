import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MaterialIcons } from "@core-models/material.model";
import { MainContainerIds } from "@core-models/navigation.model";
import {
  HeaderNavigationData,
  headerCopy,
} from "@core-models/static-copy.model";
import { StaticCopyService } from "@core-services/static-copy.service";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import featureToggles from "../../../assets/toggles/toggle-config.json"
import { CommonModule } from "@angular/common";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrl: "./nav-bar.component.scss",
  imports: [MatIconModule, MatSlideToggleModule, CommonModule],
  standalone: true,
})
export class NavBarComponent implements OnInit {

  @Output() navBarClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() navBarLinkClicked: EventEmitter<MainContainerIds> =
    new EventEmitter<MainContainerIds>();
  materialIcons: typeof MaterialIcons = MaterialIcons;
  headerLinks: HeaderNavigationData[];
  headerCopy: headerCopy;
  shouldShowDarkToggle: boolean = featureToggles.darkTheme

  ngOnInit(): void {
    this.headerCopy = this.staticCopyService.getJsonCopy().header;
    this.headerLinks = [
      // this.headerCopy.home,
      this.headerCopy.about,
      this.headerCopy.experience,
      this.headerCopy.projects,
      this.headerCopy.contact,
    ];
  }

  onNavBarClicked(event: any) {
    this.navBarClicked.emit();
  }

  onNavBarLinkClicked(elementId: MainContainerIds | string) {
    this.navBarLinkClicked.emit(elementId as MainContainerIds);
  }

  constructor(private staticCopyService: StaticCopyService) {}
}
