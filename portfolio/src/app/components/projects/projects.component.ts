import { Component, OnInit } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { ProjectDetails, ProjectsCopy } from "@core-models/static-copy.model";
import { StaticCopyService } from "@core-services/static-copy.service";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "projects",
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
  imports: [MatChipsModule, ProjectCardComponent, CommonModule],
  standalone: true,
})
export class ProjectsComponent implements OnInit {
  availableColors: any[];
  activeChip: any;
  projectConfigs: ProjectDetails[];
  projectsCopy: ProjectsCopy;

  ngOnInit(): void {
    this.availableColors = [
      { id: 1, name: "2017", color: "primary" },
      { id: 2, name: "2018", color: "primary" },
    ];
    this.projectsCopy = this.staticCopyService.getJsonCopy().projects;
    this.projectConfigs = [
      this.projectsCopy.spectrumWeb,
      this.projectsCopy.chemquestApp,
      this.projectsCopy.catManga,
      this.projectsCopy.cuponcity,
    ];
  }

  onSelection(chip: any, event: any) {
    this.activeChip = chip;
  }

  constructor(private staticCopyService: StaticCopyService) {}
}
