import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmppGatewayProviderComponent } from './smpp-gateway-provider.component';

describe('SmppGatewayProviderComponent', () => {
  let component: SmppGatewayProviderComponent;
  let fixture: ComponentFixture<SmppGatewayProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmppGatewayProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmppGatewayProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
