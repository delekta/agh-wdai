import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysOfferElementComponent } from './holidays-offer-element.component';

describe('HolidaysOfferElementComponent', () => {
  let component: HolidaysOfferElementComponent;
  let fixture: ComponentFixture<HolidaysOfferElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaysOfferElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaysOfferElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
