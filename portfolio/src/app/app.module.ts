import { CommonModule, LocationStrategy } from '@angular/common';
import { isDevMode, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from '@core-components/about-me/about-me.component';
import { ContactComponent } from '@core-components/contact/contact.component';
import { ExperienceComponent } from '@core-components/experience/experience.component';
import { GridTimelineComponent } from '@core-components/experience/grid-timeline/grid-timeline.component';
import { TimelineCardComponent } from '@core-components/experience/timeline-card/timeline-card.component';
import { TimelineRedesignedComponent } from '@core-components/experience/timeline-redesigned/timeline-redesigned.component';
import { GenericDialogueComponent } from '@core-components/generic-dialogue/generic-dialogue.component';
import { HomePageComponent } from '@core-components/home-page/home-page.component';
import { NavBarComponent } from '@core-components/nav-bar/nav-bar.component';
import { ProjectCardComponent } from '@core-components/projects/project-card/project-card.component';
import { ProjectsComponent } from '@core-components/projects/projects.component';
import { TempComponent } from '@core-components/temp/temp.component';
import { NetlifyStoreModule } from '@core-store/netlify-store.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { FormComponent } from './form/form.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { AboutMeComponentStandalone } from './components/about-me-standalone/about-me-standalone.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

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
    AboutMeComponent,
    FormComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NetlifyStoreModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR,
    }),
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
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    RouterModule.forRoot(APP_ROUTES),
    AboutMeComponentStandalone,
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
