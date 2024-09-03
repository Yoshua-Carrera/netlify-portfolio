import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { NavBarComponent } from '@core-components/nav-bar/nav-bar.component';
import { GenericDialogueComponent } from '@core-components/generic-dialogue/generic-dialogue.component';
import { HomePageComponent } from '@core-components/home-page/home-page.component';
import { AboutMeComponent } from '@core-components/about-me/about-me.component';
import { ProjectsComponent } from '@core-components/projects/projects.component';
import { ExperienceComponent } from '@core-components/experience/experience.component';
import { ContactComponent } from '@core-components/contact/contact.component';
import { ProjectCardComponent } from './components/projects/project-card/project-card.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NetlifyStoreModule } from '@core-store/netlify-store.module';
import { GridTimelineComponent } from './components/experience/grid-timeline/grid-timeline.component';
import { TimelineCardComponent } from './components/experience/timeline-card/timeline-card.component';
import { TimelineRedesignedComponent } from './components/experience/timeline-redesigned/timeline-redesigned.component';
import { TempComponent } from './components/temp/temp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GenericDialogueComponent,
    HomePageComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    SafeHtmlPipe,
    ProjectCardComponent,
    GridTimelineComponent,
    TimelineCardComponent,
    TimelineRedesignedComponent,
    TempComponent,
    AboutMeComponent
  ],
  imports: [
    NetlifyStoreModule,
    MatListModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
