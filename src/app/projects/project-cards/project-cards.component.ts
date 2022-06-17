import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { observable, Observable, Subject, take } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { projects } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.sass'],
})
export class ProjectCardsComponent implements OnInit {
  @Input() option: any = '';
  projectsData: any = projects;
  hoverState: any = {
    currentState: false,
    id: undefined,
  };
  projectdata: any = {};

  constructor(private dialog: MatDialog, private dataS: DataService) {}

  ngOnInit(): void {}

  change() {}

  hover(state: boolean, id: number) {
    if (state) {
      this.hoverState = {
        currentState: state,
        id: id,
      };
    } else {
      this.hoverState = {
        currentState: state,
        id: undefined,
      };
    }
  }

  openDialog(proj: any) {
    this.dataS.pushData(proj);
    this.dialog.open(DialogComponent, {
      data: {
        proj
      }
    });
  }
}
