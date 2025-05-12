import { loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";
import { netlifyGuard } from "./guards/netlify.guard";
import { LandingPageComponent } from "@core-components/landing-page/landing-page.component";

export const APP_ROUTES: Routes = [
  {
    path: "",
    component: LandingPageComponent,
  },
  {
    path: "blog",
    loadComponent: () =>
      loadRemoteModule({
        type: "manifest",
        remoteName: "blog-mfe",
        exposedModule: "./Component",
      }).then((m) => m.AppComponent),
    canActivate: [netlifyGuard],
  },
];
