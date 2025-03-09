import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponentStandalone } from './about-me.component';

describe('AboutMeComponentStandalone', () => {
  let component: AboutMeComponentStandalone;
  let fixture: ComponentFixture<AboutMeComponentStandalone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutMeComponentStandalone]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeComponentStandalone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
