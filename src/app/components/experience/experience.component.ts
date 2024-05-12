import { Component, OnInit } from '@angular/core';
import { StaticCopyService } from '@core-services/static-copy.service';
import { ExperienceCopy } from 'app/models/static-copy.model';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  intersectionObserver: (tagetClass: string) => IntersectionObserver;
  fadeInElements: NodeListOf<Element>;
  underlineElements: NodeListOf<Element>;
  experienceCopy: ExperienceCopy 

  ngOnInit(): void {
    this.experienceCopy = this.staticCopyService.getJsonCopy().experience
  }
  constructor(private staticCopyService: StaticCopyService) {}
}
