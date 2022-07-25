import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpProviderBdComponent } from './otp-provider-bd.component';

describe('OtpProviderBdComponent', () => {
  let component: OtpProviderBdComponent;
  let fixture: ComponentFixture<OtpProviderBdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpProviderBdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpProviderBdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
