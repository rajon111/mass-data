import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOurClientsComponent } from './home-our-clients.component';

describe('HomeOurClientsComponent', () => {
  let component: HomeOurClientsComponent;
  let fixture: ComponentFixture<HomeOurClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOurClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOurClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
