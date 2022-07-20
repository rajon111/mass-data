import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeatureBox2Component } from './home-feature-box2.component';

describe('HomeFeatureBox2Component', () => {
  let component: HomeFeatureBox2Component;
  let fixture: ComponentFixture<HomeFeatureBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFeatureBox2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeatureBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
