import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTimelineComponent } from './grid-timeline.component';

describe('GridTimelineComponent', () => {
  let component: GridTimelineComponent;
  let fixture: ComponentFixture<GridTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridTimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
