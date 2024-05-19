import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { ProjectCardsComponent } from './project-cards.component';

describe('ProjectCardsComponent', () => {
  let component: ProjectCardsComponent;
  let fixture: ComponentFixture<ProjectCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCardsComponent ],
      providers: [  ],
      imports: [ MatDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
