import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeatureStepComponent } from './home-feature-step.component';

describe('HomeFeatureStepComponent', () => {
  let component: HomeFeatureStepComponent;
  let fixture: ComponentFixture<HomeFeatureStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFeatureStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeatureStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
