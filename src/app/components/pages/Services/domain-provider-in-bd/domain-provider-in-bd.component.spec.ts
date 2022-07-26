import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainProviderInBdComponent } from './domain-provider-in-bd.component';

describe('DomainProviderInBdComponent', () => {
  let component: DomainProviderInBdComponent;
  let fixture: ComponentFixture<DomainProviderInBdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainProviderInBdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainProviderInBdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
