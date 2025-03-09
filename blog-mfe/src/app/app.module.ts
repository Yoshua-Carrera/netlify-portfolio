import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BLOG_MFE_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BLOG_MFE_ROUTES)
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModuleMfe { }
