import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysOfferComponent } from './holidays-offer.component';

describe('HolidaysOfferComponent', () => {
  let component: HolidaysOfferComponent;
  let fixture: ComponentFixture<HolidaysOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaysOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaysOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
