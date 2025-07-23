import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';


@Component({
  selector: 'app-busnisses',
  templateUrl: './busnisses.component.html',
  styleUrls: ['./busnisses.component.css']
})
export class BusnissesComponent {
  constructor(private _authService: AuthService, private _router: Router) {
  
  }

  goToBusnissBooking() {
    if (this._authService.isLoggedIn()) {
      this._router.navigate(['/bussiness-booking']);
    } else {
      this._router.navigate(['/signIn']); 
    }
  }
}
