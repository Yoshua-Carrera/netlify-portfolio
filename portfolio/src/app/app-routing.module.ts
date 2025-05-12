import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { netlifyGuard } from "./guards/netlify.guard";

const routes: Routes = [
  {
    path: "about",
    loadComponent: () => import('./components/about-me/about-me.component').then(m => m.AboutMeComponent),
    canActivate: [netlifyGuard],
  },
  {
    path: "projects",
    loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent),
    canActivate: [netlifyGuard],
  },
  {
    path: "contact",
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent),
    canActivate: [netlifyGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
