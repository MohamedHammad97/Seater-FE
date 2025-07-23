import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessBookingComponent } from './bussiness-booking.component';

describe('BussinessBookingComponent', () => {
  let component: BussinessBookingComponent;
  let fixture: ComponentFixture<BussinessBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BussinessBookingComponent]
    });
    fixture = TestBed.createComponent(BussinessBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
