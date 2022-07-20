import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePriceTableComponent } from './home-price-table.component';

describe('HomePriceTableComponent', () => {
  let component: HomePriceTableComponent;
  let fixture: ComponentFixture<HomePriceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePriceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePriceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
