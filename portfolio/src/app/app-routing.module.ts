import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TempComponent } from "@core-components/temp/temp.component";
import { netlifyResolver } from "./resolvers/netlify.resolver";
import { netlifyGuard } from "./guards/netlify.guard";

const routes: Routes = [
  { path: "", component: TempComponent, resolve: { data: netlifyResolver } },
  {
    path: "about",
    loadComponent: () => import('./components/about-me-standalone/about-me-standalone.component').then(m => m.AboutMeComponentStandalone),
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
