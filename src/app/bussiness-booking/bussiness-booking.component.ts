import { Component } from '@angular/core';
import { CompanyNames } from '../company-names';
import { CompanyBookingService } from '../company-booking.service';
import { Lines } from '../lines';
import { PickUpPoints } from '../pick-up-points';


@Component({
  selector: 'app-bussiness-booking',
  templateUrl: './bussiness-booking.component.html',
  styleUrls: ['./bussiness-booking.component.css']
})
export class BussinessBookingComponent {

  allComanies: CompanyNames[] = [];
  lines: Lines[] = [];
  pickups: PickUpPoints[] = [];

  selectedCompanyId: string = '';
  selectedLineId: string = '';
  selectedPickupId: string = '';


  date: Date | undefined;
  time: Date[] | undefined;


  constructor(private _companyBookingService: CompanyBookingService) { }

  ngOnInit(): void {
    this._companyBookingService.getCompanies().subscribe({
      next: (res :any) => {
        this.allComanies = res.results;
      }
    });
  }

  onCompanyChange(): void {
    this.selectedLineId = '';
    this.selectedPickupId = '';
    this.pickups = [];
    this._companyBookingService.getLinesByCompany(this.selectedCompanyId).subscribe({
      next: (res: any) => {
        this.lines = res.line;
      }
    });
  }

  onLineChange(): void {
    this.selectedPickupId = '';
    this._companyBookingService.getPickupsByLine(this.selectedLineId).subscribe({
      next: (res: any) => {
        this.pickups = res.pickUp;
      }
    });
  }

  onBookTrip(): void {
    if (this.selectedCompanyId && this.selectedLineId && this.selectedPickupId) {
      this._companyBookingService
        .bookTrip(this.selectedCompanyId, this.selectedLineId, this.selectedPickupId)
        .subscribe((res) => {
          console.log('Trip booked successfully!', res);
        });
    } else {
      alert('Please Select all Inputs');
    }
  }

}



  



