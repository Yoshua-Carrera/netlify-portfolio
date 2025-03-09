import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDialogueComponent } from './generic-dialogue.component';

describe('GenericDialogueComponent', () => {
  let component: GenericDialogueComponent;
  let fixture: ComponentFixture<GenericDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenericDialogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
