import { Component, OnInit } from "@angular/core";
import { StaticCopyService } from "@core-services/static-copy.service";
import { AboutMeCopy } from "../../models/static-copy.model";
import { techStack } from "app/models/keyword-seo.model";
import { CommonModule } from "@angular/common";
import { SafeHtmlPipe } from "app/pipes/safe-html.pipe";

@Component({
  selector: "about-me",
  templateUrl: "./about-me.component.html",
  styleUrl: "./about-me.component.scss",
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
})
export class AboutMeComponent implements OnInit {
  aboutMeCopy: AboutMeCopy;
  carouselContent: string[] = [techStack, techStack, techStack, techStack]
    .flatMap((item) =>
      Array(20)
        .fill(null)
        .map(() => item)
    )
    .flat();

  ngOnInit(): void {
    this.aboutMeCopy = this.staticCopyService.getJsonCopy().aboutMe;
  }

  constructor(private staticCopyService: StaticCopyService) {}
}
