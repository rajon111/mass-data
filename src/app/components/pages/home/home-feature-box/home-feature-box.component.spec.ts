import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeatureBoxComponent } from './home-feature-box.component';

describe('HomeFeatureBoxComponent', () => {
  let component: HomeFeatureBoxComponent;
  let fixture: ComponentFixture<HomeFeatureBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFeatureBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeatureBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
