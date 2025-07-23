import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
    selector: 'app-services-booking',
    templateUrl: './services-booking.component.html',
    styleUrls: ['./services-booking.component.css']
})
export class ServicesBookingComponent {
    constructor(private _authService: AuthService, private _router: Router) {

    }
    schoolBooking() {
        this._router.navigate(['/school'])
    }

    bussinessBooking() {
        this._router.navigate(['/bussnisses'])
    }

    privateBooking() {
        this._router.navigate(['/commingSoon'])
    }

    trackingBooking() {
        this._router.navigate(['/commingSoon'])
    }
}
