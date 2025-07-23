import { TestBed } from '@angular/core/testing';

import { CompanyBookingService } from './company-booking.service';

describe('CompanyBookingService', () => {
  let service: CompanyBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
