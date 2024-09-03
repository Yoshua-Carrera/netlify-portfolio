import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-temp",
  templateUrl: "./temp.component.html",
  styleUrl: "./temp.component.scss",
})
export class TempComponent {
  routeData: string;
  constructor(private activatedRoute: ActivatedRoute) {
    this.routeData = this.activatedRoute.snapshot.data['data']
  }
}
