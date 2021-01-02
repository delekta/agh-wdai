import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayDetailsComponent } from './holiday-details.component';

describe('HolidayDetailsComponent', () => {
  let component: HolidayDetailsComponent;
  let fixture: ComponentFixture<HolidayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
