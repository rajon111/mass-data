import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingServiceLevelAgreementComponent } from './hosting-service-level-agreement.component';

describe('HostingServiceLevelAgreementComponent', () => {
  let component: HostingServiceLevelAgreementComponent;
  let fixture: ComponentFixture<HostingServiceLevelAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostingServiceLevelAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostingServiceLevelAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
