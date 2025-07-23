import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-special-request',
  templateUrl: './special-request.component.html',
  styleUrls: ['./special-request.component.css']
})
export class SpecialRequestComponent {

    constructor(private _authService: AuthService, private _router: Router) {
    
    }
  
    goToSignin() {
      if (this._authService.isLoggedIn()) {
        this._router.navigate(['/servicesBooking']);
      } else {
        this._router.navigate(['/signIn']); 
      }
    }
}
