import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyBookingService {

  private baseUrl = 'http://localhost:3000/api/v1';

  constructor(private _httpClient: HttpClient) { }

  getCompanies() {
    return this._httpClient.get<any[]>(`${this.baseUrl}/company`);
  }

  getLinesByCompany(companyId: string) {
    return this._httpClient.get<any[]>(`${this.baseUrl}/company/${companyId}/line`);
  }

  getPickupsByLine(lineId: string) {
    return this._httpClient.get<any[]>(`${this.baseUrl}/line/${lineId}/pickUp`);
  }

  bookTrip(companyId: string, lineId: string, pickupId: string) {
    return this._httpClient.post(`${this.baseUrl}/trip`, {
      companyId,
      lineId,
      pickupId
    });
  }

}
