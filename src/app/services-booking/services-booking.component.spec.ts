import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBookingComponent } from './services-booking.component';

describe('ServicesBookingComponent', () => {
  let component: ServicesBookingComponent;
  let fixture: ComponentFixture<ServicesBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesBookingComponent]
    });
    fixture = TestBed.createComponent(ServicesBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
