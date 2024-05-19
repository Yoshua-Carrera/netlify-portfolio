import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent implements OnInit {
  toggleValue?: string;
  optionValues: string[] = ['All', 'Angular', 'React', 'Python', 'Community Driven']
  constructor() {}

  ngOnInit(): void {
    // console.log(this.topic)
  }

  change() {
    console.log(this.toggleValue);
  }
}
