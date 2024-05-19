import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineRedesignedComponent } from './timeline-redesigned.component';

describe('TimelineRedesignedComponent', () => {
  let component: TimelineRedesignedComponent;
  let fixture: ComponentFixture<TimelineRedesignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineRedesignedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineRedesignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
