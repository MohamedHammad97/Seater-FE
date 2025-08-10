import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.css']
})
export class AboutHomeComponent {
constructor( private _router: Router) {
  
  }

  about() {
    this._router.navigate(['/about']);
  }
}
