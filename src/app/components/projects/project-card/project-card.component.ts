import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardHoverState } from '@core-models/projects.model';
import { ProjectDetails, ProjectsCopy } from '@core-models/static-copy.model';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent implements OnInit {
  @Input() projectConfig: ProjectDetails;
  @Input() projectsCopy: ProjectsCopy;
  hoverState: CardHoverState;

  ngOnInit(): void {
    this.hoverState = {
      id: null,
      isHovered: false,
    };
  }

  cardHover(entered: boolean, cardId: string) {
    this.hoverState.id = entered ? cardId : null;
    this.hoverState.isHovered = entered;
  }

  constructor(private router: Router) {}
}
