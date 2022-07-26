import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaResellerHostingComponent } from './usa-reseller-hosting.component';

describe('UsaResellerHostingComponent', () => {
  let component: UsaResellerHostingComponent;
  let fixture: ComponentFixture<UsaResellerHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsaResellerHostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsaResellerHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
