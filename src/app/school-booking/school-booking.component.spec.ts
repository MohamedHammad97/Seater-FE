import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolBookingComponent } from './school-booking.component';

describe('SchoolBookingComponent', () => {
  let component: SchoolBookingComponent;
  let fixture: ComponentFixture<SchoolBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolBookingComponent]
    });
    fixture = TestBed.createComponent(SchoolBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
