import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCustomContentComponent } from './home-custom-content.component';

describe('HomeCustomContentComponent', () => {
  let component: HomeCustomContentComponent;
  let fixture: ComponentFixture<HomeCustomContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCustomContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCustomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
