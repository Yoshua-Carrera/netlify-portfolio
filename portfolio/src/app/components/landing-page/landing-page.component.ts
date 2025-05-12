import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { AboutMeComponent } from '@core-components/about-me/about-me.component';
import { ContactComponent } from '@core-components/contact/contact.component';
import { ExperienceComponent } from '@core-components/experience/experience.component';
import { HomePageComponent } from '@core-components/home-page/home-page.component';
import { ProjectsComponent } from '@core-components/projects/projects.component';
import { MainContainerIds } from '@core-models/navigation.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  imports: [HomePageComponent, AboutMeComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  standalone: true
})
export class LandingPageComponent {

  constructor(private scroller: ViewportScroller) { }

  onNavigateDown(target: MainContainerIds | string) {
    this.scroller.scrollToAnchor(target);
  }
}
