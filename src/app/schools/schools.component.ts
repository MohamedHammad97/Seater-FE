import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent  {

  constructor(private _authService: AuthService, private _router: Router) {
  
  }

  goToSchoolBooking() {
    this._router.navigate(['/school-booking']);
  }

}
