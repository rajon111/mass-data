import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalSmsInBdComponent } from './promotional-sms-in-bd.component';

describe('PromotionalSmsInBdComponent', () => {
  let component: PromotionalSmsInBdComponent;
  let fixture: ComponentFixture<PromotionalSmsInBdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionalSmsInBdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalSmsInBdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
